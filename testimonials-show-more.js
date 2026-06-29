(function () {
    const batchSize = 6;

    function getCards(grid) {
        return Array.from(grid.children).filter((child) =>
            child.classList.contains('testimonial-card') ||
            child.classList.contains('testimonial-expanded-card')
        );
    }

    function setupTestimonialGrid(grid) {
        const cards = getCards(grid);
        const button = grid.nextElementSibling?.querySelector('.testimonial-show-more-button');

        if (!button || cards.length <= batchSize) {
            if (button) button.parentElement.remove();
            return;
        }

        let visibleCount = batchSize;

        function updateCards() {
            cards.forEach((card, index) => {
                card.classList.toggle('testimonial-hidden', index >= visibleCount);
            });

            if (visibleCount >= cards.length) {
                button.parentElement.remove();
            }
        }

        button.addEventListener('click', () => {
            visibleCount = Math.min(visibleCount + batchSize, cards.length);
            updateCards();
        });

        updateCards();
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-testimonial-load-more]').forEach(setupTestimonialGrid);
    });
})();
