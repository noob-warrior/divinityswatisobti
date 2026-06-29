/**
 * Shared component data and renderers for homepage and detail pages.
 * Keeps markup generation centralized while delegating interactions per grid.
 */

const TAROT_CARDS = [
    {
        icon: '<i class="fas fa-moon" aria-hidden="true"></i>',
        name: 'The Moon',
        meaning: 'Intuition & Mystery',
        arcana: 'Major Arcana XVIII',
        summary: 'A card for foggy moments, hidden feelings, dreams, and inner knowing. The Moon asks you to slow down, look beneath the surface, and let intuition reveal what logic cannot yet name.',
        guidance: 'Best for questions around emotional confusion, mixed signals, subconscious patterns, and trusting your instincts.',
        keywords: ['Intuition', 'Dreams', 'Hidden truth'],
        accent: '#c7b6ff',
        glow: 'rgba(199, 182, 255, 0.28)',
        backgroundImage: 'public/tarot-moon-bg.png',
        backgroundPosition: 'center 32%',
        link: 'tarot-detail.html'
    },
    {
        icon: '<i class="fas fa-star" aria-hidden="true"></i>',
        name: 'The Star',
        meaning: 'Hope & Guidance',
        arcana: 'Major Arcana XVII',
        summary: 'The Star arrives after difficulty as a sign of renewal, healing, and quiet faith. It reminds you that your path can open again when you reconnect with hope and your own inner strength.',
        guidance: 'Best for healing, rebuilding confidence, future direction, manifestation, and receiving gentle reassurance.',
        keywords: ['Hope', 'Renewal', 'Healing'],
        accent: '#cfead6',
        glow: 'rgba(207, 234, 214, 0.28)',
        backgroundImage: 'public/tarot-star-bg.png',
        backgroundPosition: 'center 34%',
        link: 'tarot-detail.html'
    },
    {
        icon: '<i class="fas fa-sun" aria-hidden="true"></i>',
        name: 'The Sun',
        meaning: 'Joy & Success',
        arcana: 'Major Arcana XIX',
        summary: 'The Sun brings clarity, vitality, optimism, and achievement. It points to confidence, visible progress, and the warm kind of success that feels aligned with who you truly are.',
        guidance: 'Best for success, career momentum, relationship happiness, confidence, celebration, and clear yes-energy.',
        keywords: ['Clarity', 'Success', 'Vitality'],
        accent: '#f4c86a',
        glow: 'rgba(244, 200, 106, 0.28)',
        backgroundImage: 'public/tarot-sun-bg.png',
        backgroundPosition: 'center 30%',
        link: 'tarot-detail.html'
    }
];

const SERVICES = [
    {
        id: 'numerology',
        icon: '<i class="fas fa-hashtag" aria-hidden="true"></i>',
        title: 'Numerology',
        description: 'Corrections and guidance through name, signature, mobile number, compatibility, and education-focused numerology.',
        startingPrice: '&#8377;499',
        previewItems: [
            '15, 30, and 60 minute session options',
            'Name, signature, mobile, account, and compatibility guidance',
            'Clear reports and practical correction suggestions'
        ],
        link: 'numerology-detail.html',
        detailTitle: 'Numerology Guidance',
        detailDescription: 'Focused numerology support for correction-based remedies and practical life guidance.',
        detailItems: [
            'Name Correction',
            'Signature Correction',
            'Mobile Number Correction',
            'Marriage Compatibility',
            'Education Guidance',
            'Account Number Correction'
        ],
        detailNote: 'A practical numerology session centered on balance, alignment, and day-to-day clarity.',
        bookText: 'Book Now',
        bookMessage: 'a numerology session'
    },
    {
        id: 'tarot-cards',
        icon: '<i class="fas fa-clone" aria-hidden="true"></i>',
        title: 'Tarot Cards',
        description: 'Tarot readings for personal, business, career, relationship, and guidance-focused clarity.',
        startingPrice: '&#8377;499',
        previewItems: [
            '15, 30, and 60 minute reading options',
            'Personal, business, career, relationship, and education spreads',
            'Current energy, blocks, timing, and next-step guidance'
        ],
        link: 'tarot-services-detail.html',
        detailTitle: 'Tarot Card Reading',
        detailDescription: 'Insightful tarot guidance for the areas you want to understand with more confidence and calm.',
        detailItems: [
            'Personal Guidance',
            'Business Guidance',
            'Career Guidance',
            'Relationship Guidance',
            'Marriage Compatibility',
            'Education Guidance'
        ],
        detailNote: 'A focused tarot reading designed to highlight your current energy, choices, and next steps.',
        bookText: 'Book Now',
        bookMessage: 'a tarot reading session'
    }
];

const SERVICE_SESSIONS = {
    'tarot-cards': {
        label: 'Tarot Reading',
        intro: 'Choose a focused tarot session for personal, business, career, relationship, marriage, or education guidance.',
        sessions: [
            {
                id: 'tarot-15',
                duration: '15 Minutes',
                title: 'Quick Clarity',
                bestFor: 'Best for one focused question',
                price: '&#8377;499',
                priceLabel: 'quick audio session',
                features: [
                    'One clear tarot question',
                    'Current energy check',
                    'Direct guidance for the next step'
                ],
                buttonText: 'Book 15 Min'
            },
            {
                id: 'tarot-30',
                duration: '30 Minutes',
                title: 'Guided Reading',
                bestFor: 'Best for personal, career, or relationship clarity',
                price: '&#8377;1,100',
                priceLabel: 'focused tarot session',
                features: [
                    'One main life area in detail',
                    'Energy and block reading',
                    'Practical next steps and timing'
                ],
                buttonText: 'Book 30 Min',
                featured: true
            },
            {
                id: 'tarot-60',
                duration: '60 Minutes',
                title: 'Deep Spread',
                bestFor: 'Best for multiple life areas and deeper guidance',
                price: '&#8377;2,100',
                priceLabel: 'deep tarot session',
                features: [
                    'Personal, career, relationship, or business spread',
                    'Pattern and opportunity reading',
                    'Detailed guidance summary'
                ],
                buttonText: 'Book 60 Min'
            }
        ]
    },
    numerology: {
        label: 'Numerology',
        intro: 'Choose a numerology session for name, signature, mobile number, compatibility, education, or account number guidance.',
        sessions: [
            {
                id: 'numerology-15',
                duration: '15 Minutes',
                title: 'Number Check',
                bestFor: 'Best for a quick mobile, date, or name vibration check',
                price: '&#8377;499',
                priceLabel: 'quick numerology session',
                features: [
                    'One number or name check',
                    'Basic vibration insight',
                    'Simple guidance for correction direction'
                ],
                buttonText: 'Book 15 Min'
            },
            {
                id: 'numerology-30',
                duration: '30 Minutes',
                title: 'Correction Guidance',
                bestFor: 'Best for mobile, account, signature, or education guidance',
                price: '&#8377;1,500',
                priceLabel: 'focused numerology session',
                features: [
                    'One correction-focused area',
                    'Personal suitability review',
                    'Remedy and lucky number guidance'
                ],
                buttonText: 'Book 30 Min'
            },
            {
                id: 'numerology-60',
                duration: '60 Minutes',
                title: 'Complete Alignment',
                bestFor: 'Best for name correction and detailed life guidance',
                price: '&#8377;3,790',
                priceLabel: 'deep numerology session',
                features: [
                    'Name or major correction analysis',
                    'Career, relationship, and decision alignment',
                    'Detailed recommendations and activation tips'
                ],
                buttonText: 'Book 60 Min',
                featured: true
            }
        ]
    }
};

const SERVICE_PACKAGE_SECTIONS = {
    numerology: {
        id: 'numerology',
        eyebrow: 'Infinity Numero Solution',
        title: 'Numerology Guidance Packages',
        intro: 'Choose a focused numerology service with clear deliverables, practical recommendations, and easy WhatsApp booking.',
        packages: [
            {
                id: 'name-correction',
                tag: 'Most Ordered',
                badge: 'Most Popular',
                title: 'Name Correction & Alignment',
                description: 'Your current name is analysed through numerology to identify spelling shifts that support career, relationship, and decision clarity.',
                includes: [
                    'Current name vibration check',
                    'Name spelling options with rationale',
                    'Lucky dates, colours, and activation tips',
                    'Personal guidance summary',
                    'Detailed PDF report'
                ],
                price: '&#8377;3,790',
                priceLabel: 'PDF Report',
                buttonText: 'Order Name Correction'
            },
            {
                id: 'signature-correction',
                tag: 'Personal Alignment',
                title: 'Signature Correction',
                description: 'A practical signature review to align daily written identity with confidence, stability, and desired personal outcomes.',
                includes: [
                    'Current signature energy review',
                    'Stroke, flow, and placement guidance',
                    'Corrected signature direction',
                    'Practice and activation instructions',
                    'Quick reference report'
                ],
                price: '&#8377;2,100',
                priceLabel: 'Correction Report',
                buttonText: 'Order Signature Correction'
            },
            {
                id: 'mobile-number-correction',
                tag: 'Daily Energy',
                title: 'Mobile Number Correction',
                description: 'A number analysis for the phone number you use most often, with practical suggestions for stronger personal alignment.',
                includes: [
                    'Mobile number vibration check',
                    'Personal and professional suitability',
                    'Remedy suggestions where needed',
                    'Lucky number guidance',
                    'Concise action report'
                ],
                price: '&#8377;1,500',
                priceLabel: 'Quick Report',
                buttonText: 'Order Mobile Correction'
            },
            {
                id: 'marriage-compatibility',
                tag: 'Couples',
                title: 'Marriage Compatibility & Matchmaking',
                description: 'Both partners are reviewed for compatibility, emotional patterns, decision alignment, and long-term relationship stability.',
                includes: [
                    'Birth-date compatibility analysis',
                    'Emotional and decision-making alignment',
                    'Financial mindset compatibility',
                    'Stability and risk indicators',
                    'In-depth PDF report'
                ],
                price: '&#8377;5,100',
                priceLabel: 'In-depth Report',
                buttonText: 'Order Compatibility'
            },
            {
                id: 'education-guidance',
                tag: 'Students',
                title: 'Education Guidance',
                description: 'A numerology-led guidance session for study direction, learning strengths, timing, and supportive practical choices.',
                includes: [
                    'Student number profile',
                    'Study-strength and focus analysis',
                    'Course and stream suitability guidance',
                    'Helpful colours and dates',
                    'Guidance report'
                ],
                price: '&#8377;2,100',
                priceLabel: 'Guidance Report',
                buttonText: 'Order Education Guidance'
            },
            {
                id: 'account-number-correction',
                tag: 'Finance',
                title: 'Account Number Correction',
                description: 'A focused review of account number vibrations for financial steadiness, flow, and practical remedy suggestions.',
                includes: [
                    'Account number energy check',
                    'Financial flow indicators',
                    'Suitability and correction guidance',
                    'Remedy recommendations',
                    'Summary report'
                ],
                price: '&#8377;1,500',
                priceLabel: 'Finance Report',
                buttonText: 'Order Account Correction'
            }
        ]
    },
    'tarot-cards': {
        id: 'tarot-cards',
        eyebrow: 'Celestial Spread',
        title: 'Tarot Reading Packages',
        intro: 'Select a focused tarot reading for the question, life area, or decision that needs clear intuitive guidance.',
        packages: [
            {
                id: 'personal-guidance',
                tag: 'Self Clarity',
                badge: 'Popular',
                title: 'Personal Guidance Reading',
                description: 'A grounded tarot reading for your present energy, emotional clarity, and next step in personal life.',
                includes: [
                    'Current energy reading',
                    'Main block and opportunity',
                    'Near-future guidance',
                    'Practical next steps',
                    'WhatsApp summary'
                ],
                price: '&#8377;1,100',
                priceLabel: '30 Min Reading',
                buttonText: 'Book Personal Reading'
            },
            {
                id: 'business-guidance',
                tag: 'Business',
                title: 'Business Guidance Reading',
                description: 'A focused spread for business decisions, momentum, client flow, partnership choices, and timing.',
                includes: [
                    'Business energy scan',
                    'Decision and timing guidance',
                    'Client or partnership indicators',
                    'Risk and opportunity notes',
                    'Action summary'
                ],
                price: '&#8377;2,100',
                priceLabel: 'Strategy Reading',
                buttonText: 'Book Business Reading'
            },
            {
                id: 'career-guidance',
                tag: 'Career',
                title: 'Career Guidance Reading',
                description: 'Career-focused tarot support for job decisions, role changes, workplace blocks, and growth direction.',
                includes: [
                    'Career path energy review',
                    'Workplace challenge insight',
                    'Opportunity and timing cards',
                    'Strengths to lean on',
                    'Next-step guidance'
                ],
                price: '&#8377;1,500',
                priceLabel: 'Career Spread',
                buttonText: 'Book Career Reading'
            },
            {
                id: 'relationship-guidance',
                tag: 'Relationships',
                title: 'Relationship Guidance Reading',
                description: 'A compassionate spread for relationship clarity, communication patterns, emotional blocks, and possible direction.',
                includes: [
                    'Connection energy reading',
                    'Feelings and communication pattern',
                    'Hidden block or concern',
                    'Possible direction',
                    'Guided next steps'
                ],
                price: '&#8377;1,500',
                priceLabel: 'Relationship Spread',
                buttonText: 'Book Relationship Reading'
            },
            {
                id: 'marriage-compatibility',
                tag: 'Marriage',
                title: 'Marriage Compatibility Reading',
                description: 'Tarot guidance for compatibility, long-term emotional fit, conflict patterns, and marriage-related clarity.',
                includes: [
                    'Compatibility spread',
                    'Strengths and pressure points',
                    'Family and commitment indicators',
                    'Long-term direction',
                    'Clear recommendation summary'
                ],
                price: '&#8377;2,100',
                priceLabel: 'Compatibility Reading',
                buttonText: 'Book Compatibility Reading'
            },
            {
                id: 'education-guidance',
                tag: 'Students',
                title: 'Education Guidance Reading',
                description: 'Tarot support for education decisions, exam stress, stream selection, focus blocks, and confidence.',
                includes: [
                    'Study energy reading',
                    'Focus block identification',
                    'Course or direction guidance',
                    'Timing and confidence support',
                    'Practical study advice'
                ],
                price: '&#8377;1,100',
                priceLabel: 'Guidance Reading',
                buttonText: 'Book Education Reading'
            }
        ]
    }
};

const COURSES = [
    {
        id: 'tarot-basic-advance',
        icon: '<i class="fas fa-clone" aria-hidden="true"></i>',
        title: 'Tarot Basic + Advanced Course',
        description: 'A live 1-month tarot training with basic-to-advanced curriculum, real-case practice, recordings, PDF notes, weekend practice, and lifetime support.',
        link: 'courses-detail.html#tarot-basic-advance',
        duration: '1 Month',
        format: 'Live online classes on Zoom',
        schedule: 'Mon to Fri classes',
        timing: 'Morning and evening batches available',
        flexibility: 'Flexible timings',
        level: 'Basic to Advanced',
        fee: '5100/-',
        snapshotPoints: [
            'Live Zoom training with morning and evening batches',
            'Practice readings and real-case discussion',
            'Class recordings, PDF notes, and cheatsheets',
            'Weekend practice sessions and lifetime support'
        ],
        detailPoints: [
            'Duration - 1 month',
            'Live online classes on Zoom',
            'Class schedule - Mon to Fri classes',
            'Morning and evening batches available',
            'Flexible timings',
            'Basic to advanced course',
            'Practical learning methods',
            'Case studies and Q&A sessions',
            'Class recordings, PDF notes, and cheatsheets',
            'Weekend practice sessions with students',
            'Professional guidance to start your tarot consultancy'
        ],
        takeaways: [
            {
                icon: '<i class="fas fa-award" aria-hidden="true"></i>',
                title: 'Tarot Mastery Certification'
            },
            {
                icon: '<i class="fas fa-video" aria-hidden="true"></i>',
                title: 'Class Recordings'
            },
            {
                icon: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
                title: 'PDF Notes & Cheatsheets'
            }
        ],
        learningSections: [
            {
                title: 'Foundations and Core Reading Skills',
                items: [
                    'Basics - What is tarot?, origin and history of tarot',
                    'Introduction - How tarot works, how to prepare your deck and set your intention',
                    'Elemental significance - Description of elements, slow and fast elements, masculine and feminine elements, attributes of these elements in tarot',
                    'Card structure - Division of cards in tarot and structure',
                    '22 major arcana cards - Upright and reversed',
                    '56 minor arcana cards - Upright and reversed',
                    'Aspects readings - Love, relationships, career, health, money, finances, business, property, conflicts, marriage etc.',
                    'How to perform a tarot card reading - 5 steps',
                    'How to read multiple cards together',
                    'Free flow and position based readings'
                ]
            },
            {
                title: 'Spreads, Timing, and Advanced Practice',
                items: [
                    'Spreads - Basic tarot spreads for love, career, conflicts, health, daily insights etc. Celtic cross spread',
                    'Timing prediction - 2+1 methods, bulls eye method',
                    'Shuffling and cleansing',
                    'Charging and connecting your tarot deck cord cutting methods',
                    'Meditation for intuition awakening',
                    'Muhurt fixing using tarot',
                    'Card combinations - Advanced card combinations for expert like predictions',
                    'Cards in relation to zodiac signs',
                    'Suits and numerological association',
                    'Cards and planetary association',
                    'Health and tarot - Predicting health issues using tarot',
                    '7 chakras in tarot',
                    'Yes or no card reading',
                    'Remedial spread and problem solving spreads',
                    'Cause and affect based remedies'
                ]
            }
        ],
        highlights: [
            'Case studies and guided practice',
            'Students practice live readings through guided sessions',
            'Lifetime support',
            'Weekend practice sessions with all students',
            'Professional guidance to start your tarot consultancy in 1 month'
        ],
        coachLabel: 'Celestial Spread - Coach and Expert Reader',
        phone: '9625746605',
        joinText: 'Join Now',
        refundNote: 'Fees complete or partly paid is non refundable.'
    }
];

function getContainer(containerId) {
    if (typeof document === 'undefined') return null;
    return document.getElementById(containerId);
}

function renderCollection(containerId, items, renderItem) {
    const container = getContainer(containerId);
    if (!container) return null;

    container.innerHTML = items.map(renderItem).join('');
    return container;
}

function bindContainerActions(container) {
    if (!container || container.dataset.boundActions === 'true') return;

    container.addEventListener('click', (event) => {
        const packageButton = event.target.closest('[data-package-order]');
        if (packageButton) {
            const service = SERVICE_PACKAGE_SECTIONS[packageButton.dataset.serviceId];
            const selectedPackage = service?.packages.find((item) => item.id === packageButton.dataset.packageOrder);

            if (service && selectedPackage) {
                const payment = window.UpiPayment || window.PhonePePayment;
                if (payment && typeof payment.orderPackage === 'function') {
                    payment.orderPackage(service, selectedPackage);
                } else if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openOrderRequest === 'function') {
                    const message = buildServicePackageOrderMessage(service, selectedPackage);
                    window.AstrologyWhatsApp.openOrderRequest(message);
                } else if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openWhatsApp === 'function') {
                    const message = buildServicePackageOrderMessage(service, selectedPackage);
                    window.AstrologyWhatsApp.openWhatsApp(message);
                } else {
                    window.location.href = 'contact.html';
                }
            }

            return;
        }

        const bookButton = event.target.closest('[data-book-message]');
        if (bookButton) {
            if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openBookingRequest === 'function') {
                window.AstrologyWhatsApp.openBookingRequest(bookButton.dataset.bookMessage);
            } else {
                window.location.href = 'contact.html';
            }
            return;
        }

        const sessionButton = event.target.closest('[data-session-order]');
        if (sessionButton) {
            const service = SERVICE_SESSIONS[sessionButton.dataset.serviceId];
            const selectedSession = service?.sessions.find((item) => item.id === sessionButton.dataset.sessionOrder);

            if (service && selectedSession) {
                const payment = window.UpiPayment || window.PhonePePayment;
                if (payment && typeof payment.bookSession === 'function') {
                    payment.bookSession(service.label, selectedSession);
                } else if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openOrderRequest === 'function') {
                    const message = buildServiceSessionMessage(service, selectedSession);
                    window.AstrologyWhatsApp.openOrderRequest(message);
                } else if (window.AstrologyWhatsApp && typeof window.AstrologyWhatsApp.openWhatsApp === 'function') {
                    const message = buildServiceSessionMessage(service, selectedSession);
                    window.AstrologyWhatsApp.openWhatsApp(message);
                } else {
                    window.location.href = 'contact.html';
                }
            }

            return;
        }

        const courseButton = event.target.closest('[data-course-enroll]');
        if (courseButton) {
            const selectedCourse = COURSES.find((item) => item.id === courseButton.dataset.courseEnroll) || COURSES[0];
            const payment = window.UpiPayment || window.PhonePePayment;

            if (payment && typeof payment.joinCourse === 'function') {
                payment.joinCourse(selectedCourse);
            } else {
                window.open(`https://wa.me/91${selectedCourse.phone}`, '_blank', 'noopener,noreferrer');
            }

            return;
        }

        const linkTarget = event.target.closest('[data-link]');
        if (linkTarget) {
            window.location.href = linkTarget.dataset.link;
        }
    });

    container.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;

        const linkTarget = event.target.closest('[data-link]');
        if (!linkTarget) return;

        event.preventDefault();
        window.location.href = linkTarget.dataset.link;
    });

    container.dataset.boundActions = 'true';
}

function scrollToHashTarget() {
    const hashTarget = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (!hashTarget) return;

    const target = document.getElementById(hashTarget);
    if (!target) return;

    requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

function renderChipRow(items) {
    return `
        <div class="course-chip-row">
            ${items.map((item) => `<span class="course-chip">${item}</span>`).join('')}
        </div>
    `;
}

function renderPackageFeatureList(items) {
    return `
        <ul class="service-package-features">
            ${items.map((item) => `
                <li>
                    <i class="fas fa-check" aria-hidden="true"></i>
                    <span>${item}</span>
                </li>
            `).join('')}
        </ul>
    `;
}

function buildServicePackageOrderMessage(service, selectedPackage) {
    const readablePrice = selectedPackage.price.replace('&#8377;', 'Rs. ');

    return [
        `Hello, I would like to book ${selectedPackage.title}.`,
        `Service: ${service.title}`,
        `Package: ${selectedPackage.title}`,
        `Fee: ${readablePrice} ${selectedPackage.priceLabel}`,
        '',
        'Please share availability and next steps.'
    ].join('\n');
}

function buildServiceSessionMessage(service, selectedSession) {
    const readablePrice = selectedSession.price.replace('&#8377;', 'Rs. ');

    return [
        `Hello, I would like to book the ${selectedSession.duration} ${service.label} session.`,
        `Service: ${service.label}`,
        `Session: ${selectedSession.title}`,
        `Duration: ${selectedSession.duration}`,
        `Fee: ${readablePrice} ${selectedSession.priceLabel}`,
        '',
        'Please share availability and next steps.'
    ].join('\n');
}

function renderServicePackagePage(containerId) {
    const container = getContainer(containerId);
    if (!container) return;

    const serviceId = container.dataset.serviceId || 'numerology';
    const service = SERVICE_PACKAGE_SECTIONS[serviceId];
    if (!service) return;

    container.innerHTML = `
        <div class="service-package-hero">
            <div class="service-package-hero-copy">
                <p class="service-package-eyebrow">${service.eyebrow}</p>
                <h2>${service.title}</h2>
                <p>${service.intro}</p>
            </div>
        </div>

        <div class="service-package-grid">
            ${service.packages.map((item) => `
                <article class="service-package-card${item.badge ? ' service-package-card-has-badge' : ''}" id="${item.id}">
                    ${item.badge ? `<div class="service-package-badge">${item.badge}</div>` : ''}
                    <p class="service-package-tag">${item.tag}</p>
                    <h3>${item.title}</h3>
                    <p class="service-package-description">${item.description}</p>
                    ${renderPackageFeatureList(item.includes)}
                    <div class="service-package-footer">
                        <div>
                            <span class="service-package-price">${item.price}</span>
                            <span class="service-package-price-label">${item.priceLabel}</span>
                        </div>
                        <button type="button" class="service-package-button" data-service-id="${service.id}" data-package-order="${item.id}">
                            <span>${item.buttonText}</span>
                            <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </article>
            `).join('')}
        </div>

        <div class="service-package-help">
            <h3>Need help choosing?</h3>
            <p>Send a quick WhatsApp message and share what you want clarity on. You can be guided to the most suitable package before booking.</p>
            <button type="button" class="cta-button" data-book-message="${service.title.toLowerCase()} guidance">Ask on WhatsApp</button>
        </div>
    `;

    bindContainerActions(container);
    scrollToHashTarget();
}

function renderTarotGrid(containerId) {
    const container = renderCollection(containerId, TAROT_CARDS, (card) => `
        <div class="tarot-card" data-link="${card.link}" role="link" tabindex="0" style="--tarot-accent: ${card.accent}; --tarot-glow: ${card.glow}; --tarot-bg-image: url('${card.backgroundImage}'); --tarot-bg-position: ${card.backgroundPosition};">
            <div class="tarot-card-inner">
                <div class="tarot-card-top">
                    <div class="tarot-icon">${card.icon}</div>
                    <span class="tarot-arcana">${card.arcana}</span>
                </div>
                <div class="tarot-card-heading">
                    <div class="tarot-name">${card.name}</div>
                    <div class="tarot-meaning">${card.meaning}</div>
                </div>
                <p class="tarot-summary">${card.summary}</p>
                <div class="tarot-keywords" aria-label="${card.name} keywords">
                    ${card.keywords.map((keyword) => `<span>${keyword}</span>`).join('')}
                </div>
                <div class="tarot-guidance">
                    <span>Reading Focus</span>
                    <p>${card.guidance}</p>
                </div>
                <div class="tarot-card-action">
                    <span>Explore this card</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    `);

    bindContainerActions(container);
}

function renderServicesGrid(containerId) {
    const container = renderCollection(containerId, SERVICES, (service) => `
        <div class="service-card" data-link="${service.link}" role="link" tabindex="0">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            ${service.startingPrice ? `<p class="service-starting-price">Starts at ${service.startingPrice}</p>` : ''}
            ${Array.isArray(service.previewItems) && service.previewItems.length ? `
                <ul class="service-card-list">
                    ${service.previewItems.map((item) => `<li>${item}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `);

    bindContainerActions(container);
}

function renderServiceSessionCards(serviceId) {
    const service = SERVICE_SESSIONS[serviceId] || SERVICE_SESSIONS['tarot-cards'];

    return `
        <p class="service-session-intro">${service.intro}</p>
        <div class="service-session-grid">
            ${service.sessions.map((session) => `
                <article class="service-session-card${session.featured ? ' service-session-card-featured' : ''}">
                    ${session.featured ? '<div class="service-session-badge">Most Popular</div>' : ''}
                    <p class="service-session-duration">${session.duration}</p>
                    <h3>${session.title}</h3>
                    <p class="service-session-best">${session.bestFor}</p>
                    <div class="service-session-divider"></div>
                    <div class="service-session-price-row">
                        <span class="service-session-currency">&#8377;</span>
                        <span class="service-session-price">${session.price.replace('&#8377;', '')}</span>
                    </div>
                    <p class="service-session-label">${session.priceLabel}</p>
                    <ul class="service-session-features">
                        ${session.features.map((feature) => `
                            <li>
                                <i class="fas fa-check" aria-hidden="true"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <button type="button" class="service-session-button" data-service-id="${serviceId}" data-session-order="${session.id}">
                        ${session.buttonText}
                    </button>
                </article>
            `).join('')}
        </div>
    `;
}

function renderServiceSessionPricing(containerId) {
    const container = getContainer(containerId);
    if (!container) return;

    const defaultServiceId = 'tarot-cards';
    const serviceIds = Object.keys(SERVICE_SESSIONS);

    container.innerHTML = `
        <div class="service-session-tabs" role="tablist" aria-label="Service session type">
            ${serviceIds.map((serviceId) => `
                <button type="button" class="service-session-tab${serviceId === defaultServiceId ? ' active' : ''}" data-session-tab="${serviceId}" role="tab" aria-selected="${serviceId === defaultServiceId ? 'true' : 'false'}">
                    ${SERVICE_SESSIONS[serviceId].label}
                </button>
            `).join('')}
        </div>
        <div class="service-session-panel" data-session-panel>
            ${renderServiceSessionCards(defaultServiceId)}
        </div>
    `;

    const panel = container.querySelector('[data-session-panel]');

    container.addEventListener('click', (event) => {
        const tab = event.target.closest('[data-session-tab]');
        if (!tab || !panel) return;

        const serviceId = tab.dataset.sessionTab;
        container.querySelectorAll('[data-session-tab]').forEach((button) => {
            const isActive = button === tab;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        panel.innerHTML = renderServiceSessionCards(serviceId);
    });

    bindContainerActions(container);
}

function renderServicesDetailGrid(containerId) {
    const container = renderCollection(containerId, SERVICES, (service) => `
        <div class="service-card-expanded service-choice-card" id="${service.id}" data-link="${service.link}" role="link" tabindex="0">
            <div class="service-icon">${service.icon}</div>
            <div class="service-name">${service.title}</div>
            <div class="service-description">${service.detailDescription}</div>
            <div class="service-note">${service.detailItems.length} focused packages with pricing, details, and WhatsApp booking.</div>
            <span class="cta-button">View ${service.title} Packages</span>
        </div>
    `);

    bindContainerActions(container);
    scrollToHashTarget();
}

function renderCoursesGrid(containerId) {
    const container = renderCollection(containerId, COURSES, (course) => `
        <div class="course-card" data-link="${course.link}" role="link" tabindex="0">
            <div class="course-icon">${course.icon}</div>
            <h3>${course.title}</h3>
            <p class="course-meta-line">${course.duration} &bull; ${course.format} &bull; ${course.level}</p>
            <p>${course.description}</p>
            <ul class="course-preview-list">
                ${course.detailPoints.slice(0, 4).map((item) => `<li>${item}</li>`).join('')}
            </ul>
            ${renderChipRow([course.schedule, course.timing, `Energy Exchange ${course.fee}`])}
        </div>
    `);

    bindContainerActions(container);
}

function renderCoursesDetailContent(containerId) {
    const container = getContainer(containerId);
    if (!container) return;

    const course = COURSES[0];
    const essentials = [
        `Duration - ${course.duration}`,
        course.format,
        `Schedule - ${course.schedule}`,
        course.timing,
        course.flexibility,
        `Course Level - ${course.level}`
    ];

    container.innerHTML = `
        <div class="card course-overview-card" id="${course.id}">
            <div class="course-icon course-icon-large">${course.icon}</div>
            <h2 class="course-detail-heading">${course.title}</h2>
            <p class="course-detail-copy">${course.description}</p>
            ${renderChipRow([course.duration, course.level, course.format, course.schedule, course.timing, `Energy Exchange ${course.fee}`])}
            <p class="course-detail-copy">Train live, practice with real cases, and build toward professional tarot reading through clearly separated learning sections.</p>
        </div>

        <div class="course-top-grid">
            <div class="card course-section-card">
                <h3>Course Essentials</h3>
                <ul class="course-detail-list">
                    ${essentials.map((item) => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="card course-section-card">
                <h3>Course Snapshot</h3>
                <ul class="course-preview-list">
                    ${course.snapshotPoints.map((item) => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="card course-section-card">
                <h3>Program Details</h3>
                <ul class="course-detail-list">
                    ${course.detailPoints.map((item) => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="course-takeaway-grid">
            ${course.takeaways.map((takeaway) => `
                <div class="card course-takeaway-card">
                    <div class="course-takeaway-icon">${takeaway.icon}</div>
                    <h3>${takeaway.title}</h3>
                </div>
            `).join('')}
        </div>

        <div class="course-outline-grid">
            ${course.learningSections.map((section) => `
                <div class="card course-outline-card">
                    <h3>${section.title}</h3>
                    <ul class="course-detail-list">
                        ${section.items.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>

        <div class="course-section-grid">
            <div class="card course-highlight-card">
                <div class="course-card-eyebrow">What You Get</div>
                <h3>Course Highlights</h3>
                <div class="course-highlight-stack">
                    ${course.highlights.map((item, index) => `
                        <div class="course-highlight-item">
                            <span class="course-highlight-index">${String(index + 1).padStart(2, '0')}</span>
                            <p>${item}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card course-cta-card">
                <div class="course-card-eyebrow">Enrollment</div>
                <div class="course-fee-label">Energy Exchange</div>
                <div class="course-fee">${course.fee}</div>
                <p class="course-detail-copy">Start your tarot consultancy journey with guided practice, live readings, and long-term support.</p>
                <p class="course-contact-label">${course.coachLabel}</p>
                <button type="button" class="cta-button course-cta-button" data-course-enroll="${course.id}">
                    <i class="fas fa-mobile-screen-button" aria-hidden="true"></i>
                    <span>${course.joinText}</span>
                    <span>Pay with UPI</span>
                </button>
                <p class="course-refund-note">${course.refundNote}</p>
            </div>
        </div>
    `;

    scrollToHashTarget();
}

function initializeComponents() {
    if (getContainer('tarotGrid')) renderTarotGrid('tarotGrid');
    if (getContainer('servicesGrid')) renderServicesGrid('servicesGrid');
    if (getContainer('serviceSessionPricing')) renderServiceSessionPricing('serviceSessionPricing');
    if (getContainer('servicesDetailGrid')) renderServicesDetailGrid('servicesDetailGrid');
    if (getContainer('servicePackageContent')) renderServicePackagePage('servicePackageContent');
    if (getContainer('coursesGrid')) renderCoursesGrid('coursesGrid');
    if (getContainer('coursesDetailContent')) renderCoursesDetailContent('coursesDetailContent');
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeComponents);
    } else {
        initializeComponents();
    }
}
