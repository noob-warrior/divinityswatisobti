(function () {
    function renderLogo(target) {
        const mode = target.dataset.dynamicLogo || 'nav';

        if (mode === 'hero') {
            target.innerHTML = `<img src="public/divinity-logo.jpeg" alt="Divinity Swati Sobti" class="logo-image hero-logo">`;
        } else if (mode === 'checkout') {
            const label = target.dataset.logoLabel || 'Checkout';
            target.innerHTML = `<img src="public/divinity-logo.jpeg" alt="Divinity Swati Sobti" class="logo-image"><span class="logo-text-suffix">${label}</span>`;
        } else {
            target.innerHTML = `<img src="public/divinity-logo.jpeg" alt="Divinity Swati Sobti" class="logo-image nav-logo">`;
        }

        target.classList.add('dynamic-logo-ready');
    }

    function initializeDynamicLogos() {
        document.querySelectorAll('[data-dynamic-logo]').forEach(renderLogo);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDynamicLogos);
    } else {
        initializeDynamicLogos();
    }
})();
