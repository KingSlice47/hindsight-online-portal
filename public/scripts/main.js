// Enhanced JavaScript for dynamic website functionality

class Website {
    constructor() {
        this.lastScrollY = 0;
        this.scrollDirection = 'up';
        this.init();
    }

    init() {
        this.setupPageLoader();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupEnhancedAnimations();
        this.setupFormValidation();
        this.setupScrollProgress();
        this.setupScrollToTop();
        this.setupParallaxEffects();
        this.setupNavbarBehavior();
        this.setupInteractiveElements();
        this.setupStickyCTA();
    }

    // Page Loading Animation
    setupPageLoader() {
        window.addEventListener('load', () => {
            const loader = document.querySelector('.page-loader');
            if (loader) {
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.remove();
                    }, 500);
                }, 800);
            }
        });
    }

    // Enhanced Mobile Menu with animations
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('show');
                this.toggleMobileMenuIcon(mobileMenuBtn);
            });

            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('.nav-link-mobile');
            mobileLinks.forEach((link, index) => {
                link.addEventListener('click', () => {
                    setTimeout(() => {
                        mobileMenu.classList.remove('show');
                        this.resetMobileMenuIcon(mobileMenuBtn);
                    }, 200);
                });
                
                // Stagger animation for mobile links
                link.style.animationDelay = `${index * 0.1}s`;
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('show');
                    this.resetMobileMenuIcon(mobileMenuBtn);
                }
            });
        }
    }

    toggleMobileMenuIcon(button) {
        const hamburgers = button.querySelectorAll('.hamburger');
        hamburgers.forEach((hamburger, index) => {
            if (index === 0) {
                hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
            } else if (index === 1) {
                hamburger.style.opacity = '0';
            } else if (index === 2) {
                hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        });
    }

    resetMobileMenuIcon(button) {
        const hamburgers = button.querySelectorAll('.hamburger');
        hamburgers.forEach((hamburger) => {
            hamburger.style.transform = 'none';
            hamburger.style.opacity = '1';
        });
    }

    // Enhanced Smooth Scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced Scroll Effects and Animations
    setupScrollEffects() {
        const observerOptions = {
            threshold: [0.1, 0.3, 0.5],
            rootMargin: '-50px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add different animation classes based on element type
                    if (element.classList.contains('team-member')) {
                        element.classList.add('animate-in');
                    } else if (element.classList.contains('pricing-card')) {
                        element.classList.add('animate-in');
                    } else if (element.classList.contains('service-card')) {
                        element.classList.add('animate-in');
                    } else if (element.classList.contains('stat-item')) {
                        element.classList.add('bounce-in');
                        this.animateCounter(element);
                    } else if (element.classList.contains('value-item')) {
                        element.classList.add('scale-in');
                    } else if (element.classList.contains('about-text')) {
                        element.classList.add('slide-in-left');
                    } else if (element.classList.contains('about-image')) {
                        element.classList.add('slide-in-right');
                    } else {
                        element.classList.add('fade-in-up');
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(`
            .team-member, .stat-item, .value-item, .about-text, .about-image,
            .pricing-card, .application-card, .contact-item, .service-item,
            .faq-item, .affiliation-item, .partner-item, .service-card
        `);
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Enhanced Animations with staggered effects
    setupEnhancedAnimations() {
        // Stagger team member animations
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach((member, index) => {
            member.style.animationDelay = `${index * 0.2}s`;
        });

        // Stagger pricing card animations
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
        });

        // Stagger service card animations
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Counter Animation for Statistics
    animateCounter(element) {
        const numberElement = element.querySelector('.stat-number');
        if (!numberElement) return;

        const target = parseInt(numberElement.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            numberElement.textContent = Math.floor(current);
        }, 16);
    }

    // Enhanced Form Validation
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                // Real-time validation
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('focus', () => {
                    this.clearFieldError(input);
                });
            });

            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        
        if (field.hasAttribute('required') && !value) {
            this.showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        this.clearFieldError(field);
        return true;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    // Scroll Progress Bar
    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Floating Scroll to Top Button
    setupScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
    }

    // Parallax Effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-section');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Enhanced Navbar Behavior
    setupNavbarBehavior() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            
            // Add scrolled class for styling
            if (currentScrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Add loading state to form submissions
        const submitButtons = document.querySelectorAll('button[type="submit"]');
        submitButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.add('loading');
                setTimeout(() => {
                    button.classList.remove('loading');
                }, 2000);
            });
        });

        // Add pulse animation to important elements
        const pulseElements = document.querySelectorAll('.btn-primary, .popular-badge');
        pulseElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('pulse-animation');
            });
            
            element.addEventListener('mouseleave', () => {
                element.classList.remove('pulse-animation');
            });
        });

        // Enhanced card interactions
        const cards = document.querySelectorAll('.team-member, .pricing-card, .application-card, .service-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.zIndex = '1';
            });
        });

        // Service card click effects
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('service-btn')) {
                    // Add ripple effect
                    const ripple = document.createElement('div');
                    ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(139, 195, 74, 0.3);
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        pointer-events: none;
                    `;
                    
                    const rect = card.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
                    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
                    
                    card.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                }
            });
        });
    }

    // Sticky CTA Functionality
    setupStickyCTA() {
        const stickyCta = document.getElementById('stickyCta');
        const stickyCtaClose = document.getElementById('stickyCtaClose');
        
        if (!stickyCta) return;

        let isCtaDismissed = localStorage.getItem('ctaDismissed') === 'true';
        let isCtaVisible = false;
        
        // Handle close button
        if (stickyCtaClose) {
            stickyCtaClose.addEventListener('click', () => {
                stickyCta.classList.remove('show');
                isCtaDismissed = true;
                isCtaVisible = false;
                localStorage.setItem('ctaDismissed', 'true');
            });
        }

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (isCtaDismissed) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const footer = document.querySelector('.footer');
            
            // Calculate when user is near the bottom (80% of the way down)
            const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
            const shouldShow = scrollPercentage > 0.8;
            
            // Only show if footer is visible or user is near bottom
            let footerVisible = false;
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                footerVisible = footerRect.top < windowHeight;
            }
            
            if ((shouldShow || footerVisible) && !isCtaVisible && !isCtaDismissed) {
                stickyCta.classList.add('show');
                isCtaVisible = true;
            } else if (!shouldShow && !footerVisible && isCtaVisible) {
                stickyCta.classList.remove('show');
                isCtaVisible = false;
            }
        });

        // Reset dismissal on page reload (optional - remove if you want it to persist across sessions)
        // localStorage.removeItem('ctaDismissed');
    }

    // Utility Functions
    static scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    static toggleElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
    }

    static showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            background: ${type === 'success' ? '#8bc34a' : '#f44336'};
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize website functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Website();
});

// Add page loader HTML to body if it doesn't exist
if (!document.querySelector('.page-loader')) {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.prepend(loader);
}

// Add additional CSS for animations
const animationStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .field-error {
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
