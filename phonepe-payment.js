/**
 * Shared UPI payment helpers for services, courses, and product checkout.
 * Opens a UPI intent directly with the amount prefilled for the configured ID.
 */
(function () {
    const BUSINESS_NAME = 'Divinity Swati Sobti';
    const UPI_ID = '9311319923@axl';
    const DEFAULT_NUMBER = '919625746605';

    function normalizeNumber(value) {
        const digits = String(value || '').replace(/\D/g, '');
        return digits || DEFAULT_NUMBER;
    }

    function getDefaultNumber() {
        const metaNumber = document.querySelector('meta[name="whatsapp-to"]')?.content;
        return normalizeNumber(window.WHATSAPP_FALLBACK_NUMBER || metaNumber || DEFAULT_NUMBER);
    }

    function getUpiId() {
        const metaUpi = document.querySelector('meta[name="upi-id"]')?.content;
        return String(window.UPI_PAYMENT_ID || metaUpi || UPI_ID).trim();
    }

    function openWhatsApp(message) {
        if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openWhatsApp === 'function') {
            return window.AstrologyWhatsApp.openWhatsApp(message);
        }

        const url = `https://wa.me/${getDefaultNumber()}?text=${encodeURIComponent(message)}`;
        const popup = window.open(url, '_blank', 'noopener,noreferrer');
        if (!popup) {
            window.location.href = url;
        }
        return true;
    }

    function parsePriceInPaise(priceValue) {
        if (typeof priceValue === 'number' && Number.isFinite(priceValue)) {
            return Math.max(0, Math.round(priceValue * 100));
        }

        const cleaned = String(priceValue || '')
            .replace(/&#8377;/g, '')
            .replace(/Rs\.?/gi, '')
            .replace(/INR/gi, '')
            .replace(/,/g, '');
        const match = cleaned.match(/\d+(?:\.\d{1,2})?/);
        const rupees = match ? Number(match[0]) : 0;
        return Number.isFinite(rupees) ? Math.max(0, Math.round(rupees * 100)) : 0;
    }

    function formatPaise(amountPaise) {
        const rupees = Math.max(0, Number(amountPaise || 0) / 100);
        const hasDecimals = !Number.isInteger(rupees);
        return `Rs. ${rupees.toLocaleString('en-IN', {
            minimumFractionDigits: hasDecimals ? 2 : 0,
            maximumFractionDigits: 2
        })}`;
    }

    function createMerchantOrderId() {
        return `DS_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`.slice(0, 63);
    }

    function formatAmountForUpi(amountPaise) {
        return (Math.max(0, Number(amountPaise || 0)) / 100).toFixed(2);
    }

    function setStatus(message, state) {
        document.querySelectorAll('[data-phonepe-status]').forEach((target) => {
            target.textContent = message;
            target.dataset.state = state || 'info';
        });
    }

    function getUpiTransactionNote(options) {
        const description = String(options.description || BUSINESS_NAME).replace(/\s+/g, ' ').trim();
        return description.slice(0, 80);
    }

    function buildUpiUrl(options) {
        const merchantOrderId = options.merchantOrderId || createMerchantOrderId();
        const params = new URLSearchParams({
            pa: getUpiId(),
            pn: BUSINESS_NAME,
            tr: merchantOrderId,
            tn: getUpiTransactionNote(options),
            am: formatAmountForUpi(options.amountPaise),
            cu: 'INR'
        });

        return `upi://pay?${params.toString()}`;
    }

    function openUpiPayment(options) {
        const amountPaise = Number(options.amountPaise || 0);
        if (!amountPaise || amountPaise < 100) {
            alert('Could not read the UPI payment amount. Please try again.');
            return false;
        }

        const upiUrl = buildUpiUrl(options);
        setStatus(`Opening UPI app for ${formatPaise(amountPaise)} to ${getUpiId()}...`, 'loading');
        window.location.href = upiUrl;
        return true;
    }

    function requestUpiPayment(options) {
        return openUpiPayment(options);
    }

    function requestPhonePePaymentLink(orderText, amountPaise, description) {
        return requestUpiPayment({ orderText, amountPaise, description });
    }

    function openPhonePeCheckout(options) {
        const amountPaise = Number(options.amountPaise || 0);
        if (!amountPaise || amountPaise < 100) {
            alert('Could not read the UPI payment amount. Please try again.');
            return false;
        }

        return requestUpiPayment({ ...options, amountPaise });
    }

    function bookSession(serviceLabel, session) {
        const amountPaise = parsePriceInPaise(session.price);
        const orderText = [
            'New Session Booking',
            '',
            `Service: ${serviceLabel}`,
            `Session: ${session.title}`,
            `Duration: ${session.duration}`,
            `Fee: ${formatPaise(amountPaise)} (${session.priceLabel})`
        ].join('\n');

        return openPhonePeCheckout({
            amountPaise,
            description: `${serviceLabel} - ${session.title} (${session.duration})`,
            orderText
        });
    }

    function orderPackage(service, selectedPackage) {
        const amountPaise = parsePriceInPaise(selectedPackage.price);
        const orderText = [
            'New Package Order',
            '',
            `Service: ${service.title}`,
            `Package: ${selectedPackage.title}`,
            `Fee: ${formatPaise(amountPaise)} (${selectedPackage.priceLabel})`
        ].join('\n');

        return openPhonePeCheckout({
            amountPaise,
            description: `${service.title} - ${selectedPackage.title}`,
            orderText
        });
    }

    function joinCourse(course) {
        const amountPaise = parsePriceInPaise(course.fee);
        const orderText = [
            'New Course Enrollment',
            '',
            `Course: ${course.title}`,
            `Duration: ${course.duration}`,
            `Format: ${course.format}`,
            `Fee: ${formatPaise(amountPaise)}`
        ].join('\n');

        return openPhonePeCheckout({
            amountPaise,
            description: course.title,
            orderText
        });
    }

    function checkoutProducts(cartItems, deliveryInfo, onConcluded) {
        let totalPaise = 0;
        const lines = ['New Product Order', ''];

        Object.values(cartItems || {}).forEach((item) => {
            const quantity = Math.max(1, Number(item.quantity || 1));
            const itemPaise = parsePriceInPaise(item.price) * quantity;
            totalPaise += itemPaise;
            lines.push(`- ${item.name} x${quantity} = ${formatPaise(itemPaise)}`);
        });

        lines.push('');
        lines.push(`Total: ${formatPaise(totalPaise)}`);
        lines.push('');
        lines.push('Delivery Details');
        lines.push(`Name: ${deliveryInfo.name}`);
        lines.push(`Email: ${deliveryInfo.email}`);
        lines.push(`Phone: ${deliveryInfo.phone}`);
        lines.push(`Address: ${deliveryInfo.address}, ${deliveryInfo.city}, ${deliveryInfo.state} - ${deliveryInfo.zipcode}, ${deliveryInfo.country}`);
        if (deliveryInfo.notes) lines.push(`Notes: ${deliveryInfo.notes}`);

        return openPhonePeCheckout({
            amountPaise: totalPaise,
            description: `Mystical Products - ${Object.keys(cartItems || {}).length} item(s)`,
            orderText: lines.join('\n'),
            prefill: {
                name: deliveryInfo.name,
                email: deliveryInfo.email,
                phone: deliveryInfo.phone
            },
            onConcluded
        });
    }

    function bookTarotReading(cardName, sessionInfo) {
        if (!sessionInfo || !sessionInfo.price) {
            return bookingRequest(`a tarot reading for ${cardName || 'a card'}`);
        }

        const amountPaise = parsePriceInPaise(sessionInfo.price);
        const orderText = [
            'New Tarot Reading Booking',
            '',
            `Card: ${cardName}`,
            `Session: ${sessionInfo.title || ''}`,
            `Fee: ${formatPaise(amountPaise)}`
        ].join('\n');

        return openPhonePeCheckout({
            amountPaise,
            description: `Tarot Reading - ${cardName}`,
            orderText
        });
    }

    function bookingRequest(bookMessage) {
        const label = bookMessage || 'a session';
        return openWhatsApp(`Hello, I would like to book ${label}. Please share the next available slot and UPI payment details.`);
    }

    const paymentApi = {
        openPhonePeCheckout,
        openUpiPayment,
        requestUpiPayment,
        requestPhonePePaymentLink,
        bookSession,
        orderPackage,
        joinCourse,
        checkoutProducts,
        bookTarotReading,
        bookingRequest,
        parsePriceInPaise,
        formatPaise
    };

    window.UpiPayment = paymentApi;
    window.PhonePePayment = paymentApi;
})();
