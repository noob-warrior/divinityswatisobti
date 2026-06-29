(function () {
    const DEFAULT_NUMBER = '919625746605';

    function normalizeNumber(value) {
        const digits = String(value || '').replace(/\D/g, '');
        return digits || DEFAULT_NUMBER;
    }

    function getDefaultNumber() {
        const metaNumber = document.querySelector('meta[name="whatsapp-to"]')?.content;
        return normalizeNumber(window.WHATSAPP_FALLBACK_NUMBER || metaNumber || DEFAULT_NUMBER);
    }

    function openUrl(url) {
        const popup = window.open(url, '_blank', 'noopener,noreferrer');
        if (!popup) {
            window.location.href = url;
        }
        return true;
    }

    function openWhatsApp(message, number) {
        const text = String(message || '').trim();
        const url = `https://wa.me/${normalizeNumber(number || getDefaultNumber())}?text=${encodeURIComponent(text)}`;
        return openUrl(url);
    }

    function getFieldValue(form, selectors) {
        for (const selector of selectors) {
            const field = form.querySelector(selector);
            if (field && typeof field.value === 'string') {
                const value = field.value.trim();
                if (value) {
                    return value;
                }
            }
        }

        return '';
    }

    function buildContactMessage(form) {
        const payload = {
            name: getFieldValue(form, ['#name', '[name="name"]']),
            email: getFieldValue(form, ['#email', '[name="email"]']),
            phone: getFieldValue(form, ['#phone', '[name="phone"]']),
            subject: getFieldValue(form, ['#subject', '[name="subject"]']),
            message: getFieldValue(form, ['#message', '[name="message"]'])
        };

        return [
            'Hello, I would like to get in touch.',
            `Name: ${payload.name || '-'}`,
            `Email: ${payload.email || '-'}`,
            `Phone: ${payload.phone || '-'}`,
            `Subject: ${payload.subject || '-'}`,
            '',
            'Message:',
            payload.message || '-'
        ].join('\n');
    }

    function bindContactForms() {
        const forms = document.querySelectorAll('form.contact-form');
        if (!forms.length) {
            return;
        }

        forms.forEach((form) => {
            if (form.dataset.whatsappBound === 'true') {
                return;
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                openWhatsApp(buildContactMessage(form));
                form.reset();
            });

            form.dataset.whatsappBound = 'true';
        });
    }

    function openBookingRequest(serviceName) {
        const label = serviceName || 'a session';
        return openWhatsApp(`Hello, I would like to book ${label}. Please share the next available slot.`);
    }

    function openOrderRequest(orderSummary) {
        return openWhatsApp(orderSummary);
    }

    function initializeWhatsAppContact() {
        bindContactForms();
    }

    window.AstrologyWhatsApp = {
        buildContactMessage,
        openBookingRequest,
        openOrderRequest,
        openWhatsApp
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWhatsAppContact);
    } else {
        initializeWhatsAppContact();
    }
})();
