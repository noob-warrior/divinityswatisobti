(function () {
    const PHONE = '919625746605';
    const WA_LINK = `https://wa.me/${PHONE}`;

    function createPortal() {
        if (document.getElementById('wapp-portal')) return;

        // Remove the static fallback anchors once JS is active so only one button remains.
        document.querySelectorAll('.whatsapp-float').forEach(el => el.remove());

        // Append host to the top-level element to avoid transformed ancestors
        const host = document.createElement('div');
        host.id = 'wapp-portal';
        (document.documentElement || document.body).appendChild(host);

        const shadow = host.attachShadow({ mode: 'open' });

        const svg = `
            <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path fill="#FFFFFF" d="M20.52 3.48a11.86 11.86 0 00-16.78 0 11.86 11.86 0 00-3.5 8.4c.01 1.69.39 3.33 1.13 4.83L2 21l4.32-1.34a11.85 11.85 0 004.83 1.13c3.01 0 5.85-1.17 7.97-3.29a11.86 11.86 0 000-16.82z"/>
                <path fill="#FFFFFF" d="M16.14 8.53c-.29-.15-1.73-.86-2-.96-.27-.09-.47-.15-.67.15-.2.29-.79.96-.97 1.15-.17.2-.35.22-.64.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2-.17-.27-.02-.42.12-.57.12-.12.27-.27.4-.4.13-.12.17-.21.26-.35.09-.15.05-.29-.02-.45-.08-.16-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.53.08-.81.38-.28.3-1.08 1.04-1.08 2.53 0 1.5 1.1 2.95 1.25 3.16.14.2 2.17 3.53 5.26 4.95 3.09 1.43 3.09.95 3.65.89.56-.06 1.82-.74 2.07-1.46.25-.73.25-1.36.17-1.49-.08-.13-.27-.2-.57-.35z"/>
            </svg>
        `;

        const style = `
            :host { all: initial; position: fixed; right: 20px; bottom: 20px; z-index: 2147483647; }
            .wapp { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg,#25D366,#128C7E); box-shadow: 0 6px 20px rgba(16,185,129,0.25); text-decoration: none; }
            .wapp:focus { outline: 3px solid rgba(37,211,102,0.22); outline-offset: 3px; }
            .icon { width: 28px; height: 28px; }
            @media (max-width:480px) { :host { right: 16px; bottom: 16px; } .wapp { width: 60px; height: 60px; } }
        `;

        shadow.innerHTML = `
            <style>${style}</style>
            <a class="wapp" href="${WA_LINK}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">${svg}</a>
        `;

        // keyboard accessibility
        const btn = shadow.querySelector('.wapp');
        if (btn) btn.setAttribute('tabindex', '0');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createPortal);
    } else {
        createPortal();
    }
})();
