$(document).ready(function() {
    
    // Fungsi untuk menutup menu mobile
    const closeMenu = function() {
        $('.nav-links').removeClass('open');
        $('.hamburger').removeClass('open');
        $('.hamburger').attr('aria-expanded', 'false');
        $('body').removeClass('nav-open');
    };
    
    // Event untuk tombol hamburger menu
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('open');
        $(this).toggleClass('open');
        const isOpen = $(this).hasClass('open');
        $(this).attr('aria-expanded', isOpen);
        $('body').toggleClass('nav-open');
    });
    
    // Event untuk backdrop (area gelap di belakang menu)
    $('.nav-backdrop').click(closeMenu);
    
    // Event untuk navigasi link
    $('.nav-link').click(function(e) {
        const href = $(this).attr('href');
        
        // Cek jika link adalah anchor (#)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = $(href);
            
            // Scroll smooth ke target
            if (targetElement.length > 0) {
                targetElement.get(0).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Tutup menu dan update active state
            closeMenu();
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
});

window.showToast = function(message, type = 'info', duration = 3000) {
    const $container = $('#toast-container');
    if ($container.length === 0) {
        console.error('Toast container not found');
        return;
    }
    
    // unique ID
    const toastId = 'toast-' + Date.now();
    
    // icon type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fa-solid fa-check-circle toast-icon"></i>';
            break;
        case 'error':
            icon = '<i class="fa-solid fa-exclamation-circle toast-icon"></i>';
            break;
        case 'warning':
            icon = '<i class="fa-solid fa-exclamation-triangle toast-icon"></i>';
            break;
        case 'info':
        default:
            icon = '<i class="fa-solid fa-info-circle toast-icon"></i>';
            break;
    }
    
    // Create toast
    const toastHTML = `
        <div id="${toastId}" class="toast ${type}">
            ${icon}
            <div class="toast-message">${message}</div>
            <button class="toast-close" onclick="closeToast('${toastId}')">
                <i class="fa-solid fa-times"></i>
            </button>
        </div>
    `;
    
    $container.append(toastHTML);
    
    const $toast = $('#' + toastId);
    
    // Animasi        
    setTimeout(() => {
        $toast.addClass('show');
    }, 10);
    
    const timeoutId = setTimeout(() => {
        closeToast(toastId);
    }, duration);
    
    $toast.data('timeoutId', timeoutId);
};

// Fungsi untuk menutup toast   
window.closeToast = function(toastId) {
    const $toast = $('#' + toastId);
    if ($toast.length === 0) return;
    
    // Clear the auto-dismiss timeout if it exists
    const timeoutId = $toast.data('timeoutId');
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    // Add hide class for animation
    $toast.addClass('hide');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
        $toast.remove();
    }, 300);
};
