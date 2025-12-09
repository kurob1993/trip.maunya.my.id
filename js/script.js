// JavaScript untuk Website Trip Travel Tripya
$(document).ready(function() {
    
    // Mobile menu toggle
    $('#mobile-menu-btn').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
        $('#mobile-menu').toggleClass('mobile-menu-enter');
    });
    
    // Close mobile menu when clicking on a link
    $('.nav-link').on('click', function() {
        $('#mobile-menu').addClass('hidden');
    });
    
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('navbar-scrolled shadow-lg');
        } else {
            $('nav').removeClass('navbar-scrolled shadow-lg');
        }
    });
    
    // Smooth scrolling for navigation links
    $('.nav-link, .search-trip-btn').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });
    
    // Counter animation for statistics
    function animateCounters() {
        $('.counter').each(function() {
            const $this = $(this);
            const target = parseInt($this.data('target'));
            const count = parseInt($this.text());
            const increment = target / 100;
            
            if (count < target) {
                $this.text(Math.ceil(count + increment));
                setTimeout(() => animateCounters(), 20);
            } else {
                $this.text(target);
                // Add persen if needed
                if ($this.text() === '98') {
                    $this.text('98%');
                }
            }
        });
    }
    
    // Trigger counter animation when statistics section is in view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const counterSection = $('#about').find('.counter').parent();
    if (counterSection.length) {
        counterObserver.observe(counterSection[0]);
    }
    
    // Package booking modal
    let currentPackage = '';
    
    $('.book-btn').on('click', function() {
        currentPackage = $(this).data('package');
        $('#package-name').val(currentPackage);
        $('#booking-modal').removeClass('hidden').addClass('modal-backdrop');
        $('#booking-modal').find('.modal-content').addClass('modal-content');
    });
    
    $('#close-modal').on('click', function() {
        $('#booking-modal').addClass('hidden');
        $('#booking-form')[0].reset();
    });
    
    // Close modal when clicking outside
    $('#booking-modal').on('click', function(e) {
        if (e.target === this) {
            $(this).addClass('hidden');
            $('#booking-form')[0].reset();
        }
    });
    
    // Booking form submission
    $('#booking-form').on('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.text();
        submitBtn.addClass('btn-loading').prop('disabled', true);
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.removeClass('btn-loading').prop('disabled', false).text(originalText);
            
            // Show success message
            const successMsg = $('<div class="success-message">Pemesanan berhasil! Kami akan menghubungi Anda segera.</div>');
            $(this).append(successMsg);
            
            // Reset form and close modal
            setTimeout(() => {
                $(this)[0].reset();
                $('#booking-modal').addClass('hidden');
                successMsg.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 2000);
        }, 1500);
    });
    
    // Contact form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.text();
        submitBtn.addClass('btn-loading').prop('disabled', true);
        
        setTimeout(() => {
            submitBtn.removeClass('btn-loading').prop('disabled', false).text(originalText);
            
            const successMsg = $('<div class="success-message">Pesan Anda telah terkirim! Kami akan segera merespons.</div>');
            $(this).append(successMsg);
            
            setTimeout(() => {
                $(this)[0].reset();
                successMsg.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 3000);
        }, 1500);
    });
    
    // Newsletter form submission
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault();
        
        const email = $(this).find('input[type="email"]').val();
        const submitBtn = $(this).find('button[type="submit"]');
        
        submitBtn.prop('disabled', true);
        
        setTimeout(() => {
            const successMsg = $('<div class="success-message mt-2">Terima kasih! Email Anda telah terdaftar.</div>');
            $(this).append(successMsg);
            
            setTimeout(() => {
                $(this)[0].reset();
                submitBtn.prop('disabled', false);
                successMsg.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 2000);
        }, 1000);
    });
    
    // Search functionality
    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        
        const destination = $('#destination').val();
        const date = $('#date').val();
        const duration = $('#duration').val();
        
        // Simulate search with animation
        $('.package-card').addClass('animate-fade-in');
        
        // Simple filter simulation (in real app, this would be an API call)
        if (destination) {
            // Scroll to packages section
            $('html, body').animate({
                scrollTop: $('#packages').offset().top - 80
            }, 800);
            
            // Highlight search term in packages (simulation)
            setTimeout(() => {
                $('.package-card').removeClass('animate-fade-in');
            }, 1000);
        }
    });
    
    // Destination card click handler
    $('.destination-card').on('click', function() {
        const destination = $(this).find('h3').text();
        $('#destination').val(destination);
        
        // Scroll to search section
        $('html, body').animate({
            scrollTop: $('#search-form').offset().top - 100
        }, 800);
    });
    
    // Form validation
    function validateForm(formId) {
        const form = document.getElementById(formId);
        let isValid = true;
        
        $(form).find('input[required], textarea[required]').each(function() {
            if (!$(this).val().trim()) {
                $(this).addClass('form-error');
                isValid = false;
                
                // Add error message if not already present
                if (!$(this).next('.error-message').length) {
                    $(this).after('<div class="error-message">Field ini wajib diisi</div>');
                }
            } else {
                $(this).removeClass('form-error');
                $(this).next('.error-message').remove();
            }
        });
        
        // Email validation
        $(form).find('input[type="email"]').each(function() {
            const email = $(this).val();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                $(this).addClass('form-error');
                isValid = false;
                
                if (!$(this).next('.error-message').length) {
                    $(this).after('<div class="error-message">Format email tidak valid</div>');
                }
            }
        });
        
        // Phone validation
        $(form).find('input[type="tel"]').each(function() {
            const phone = $(this).val();
            const phoneRegex = /^[0-9]{10,15}$/;
            
            if (phone && !phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
                $(this).addClass('form-error');
                isValid = false;
                
                if (!$(this).next('.error-message').length) {
                    $(this).after('<div class="error-message">Format telepon tidak valid</div>');
                }
            }
        });
        
        return isValid;
    }
    
    // Add validation on form submission
    $('#booking-form, #contact-form').on('submit', function(e) {
        const formId = $(this).attr('id');
        if (!validateForm(formId)) {
            e.preventDefault();
        }
    });
    
    // Remove error state on input
    $('input, textarea').on('input focus', function() {
        $(this).removeClass('form-error');
        $(this).next('.error-message').remove();
    });
    
    // Package filtering (advanced feature)
    function filterPackages() {
        const destination = $('#destination').val().toLowerCase();
        const duration = $('#duration').val();
        
        $('.package-card').each(function() {
            const card = $(this);
            const title = card.find('h3').text().toLowerCase();
            const description = card.find('p').text().toLowerCase();
            
            let show = true;
            
            if (destination && !title.includes(destination) && !description.includes(destination)) {
                show = false;
            }
            
            if (duration && !card.find('.badge').text().includes(duration.replace('+', '+'))) {
                show = false;
            }
            
            if (show) {
                card.show().addClass('animate-fade-in');
            } else {
                card.hide();
            }
        });
    }
    
    // Live search as user types
    $('#destination').on('input', function() {
        filterPackages();
    });
    
    $('#duration').on('change', function() {
        filterPackages();
    });
    
    // Set minimum date to today for date inputs
    const today = new Date().toISOString().split('T')[0];
    $('#date, #booking-date').attr('min', today);
    
    // Image lazy loading effect
    $('.package-card, .destination-card').each(function() {
        $(this).addClass('animate-fade-in');
    });
    
    // Tooltip initialization
    $('.tooltip').each(function() {
        const tooltip = $(this).attr('data-tooltip');
        $(this).attr('title', '');
    });
    
    // Initialize date picker with today's date
    if ($('#date').length && !$('#date').val()) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        $('#date').val(tomorrow.toISOString().split('T')[0]);
    }
    
    // Auto-resize textareas
    $('textarea').on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    
    // Add loading animation on page load
    $(window).on('load', function() {
        $('.package-card, .destination-card, .feature-card').each(function(index) {
            const card = $(this);
            setTimeout(() => {
                card.addClass('animate-fade-in');
            }, index * 100);
        });
    });
    
    // Implement parallax effect for hero section
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        const heroSection = $('#home');
        
        if (heroSection.length) {
            heroSection.css('background-position', `center ${scrolled * 0.5}px`);
        }
    });
    
    // Add hover effect to social media links
    $('.fa-facebook').parent().hover(
        function() { $(this).addClass('text-3xl'); },
        function() { $(this).removeClass('text-3xl'); }
    );
    
    // Package rating interaction
    $('.package-card').on('mouseenter', function() {
        $(this).find('.text-yellow-500 i').addClass('fa-spin');
    }).on('mouseleave', function() {
        $(this).find('.text-yellow-500 i').removeClass('fa-spin');
    });
    
    // Search trip button animation
    $('.search-trip-btn').on('mouseenter', function() {
        $(this).find('i').addClass('fa-beat');
    }).on('mouseleave', function() {
        $(this).find('i').removeClass('fa-beat');
    });
    
    // Console log for debugging
    console.log('Trip.Maunya.My.Id Website Initialized Successfully! 🚀');
});
