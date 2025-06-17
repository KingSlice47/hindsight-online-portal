
// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Check for success/error parameters in URL (from PHP redirect)
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('success') === 'true') {
        showSuccessMessage();
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('error')) {
        const errorType = urlParams.get('error');
        const errorDetails = urlParams.get('details');
        
        let errorMessage = 'An error occurred while sending your message.';
        
        switch (errorType) {
            case 'validation':
                errorMessage = 'Please fill in all required fields correctly.';
                if (errorDetails) {
                    errorMessage += ' Details: ' + decodeURIComponent(errorDetails);
                }
                break;
            case 'email_failed':
                errorMessage = 'Failed to send email. Please try again or contact us directly at info@hindsightonline.co.za';
                break;
            case 'spam':
                errorMessage = 'Your submission was flagged as spam. Please try again.';
                break;
            default:
                errorMessage = 'An unexpected error occurred. Please try again.';
        }
        
        showErrorMessage(errorMessage);
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

function handleContactSubmit(e) {
    const form = e.target;
    const submitButton = form.querySelector('.form-submit');
    
    // Check if form has PHP action (send-email.php)
    if (form.action && form.action.includes('send-email.php')) {
        // Show loading state and let PHP handle the submission
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;
        
        // Don't prevent default - let form submit to PHP script
        return true;
    }
    
    // Fallback for other email services (if needed)
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;
    
    // Try alternative email service (if configured)
    sendEmailViaEmailJS(formData)
        .then(() => {
            showSuccessMessage();
            form.reset();
        })
        .catch((error) => {
            console.error('Email send failed:', error);
            showErrorMessage('Failed to send message. Please try again or contact us directly at info@hindsightonline.co.za');
        })
        .finally(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
}

// EmailJS integration (optional - requires EmailJS setup)
async function sendEmailViaEmailJS(formData) {
    // This requires EmailJS library and configuration
    // For now, we'll simulate the process
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // In real implementation, use EmailJS here
            console.log('Form data:', Object.fromEntries(formData));
            resolve();
        }, 1000);
    });
}

function showSuccessMessage() {
    showNotification('Message Sent Successfully!', 'Thank you for your message. We\'ll get back to you within 24 hours.', 'success');
}

function showErrorMessage(message) {
    showNotification('Error', message, 'error');
}

function showNotification(title, message, type = 'success') {
    // Create notification
    const notificationDiv = document.createElement('div');
    notificationDiv.className = `notification-message ${type}-message`;
    notificationDiv.innerHTML = `
        <div class="notification-content">
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
    `;
    
    // Style the notification
    const backgroundColor = type === 'success' ? 'var(--primary)' : '#f44336';
    notificationDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notificationDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        notificationDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notificationDiv)) {
                document.body.removeChild(notificationDiv);
            }
        }, 300);
    }, 5000);
}

// Add animation styles for success message
const successStyles = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content h3 {
        margin: 0 0 8px 0;
        font-size: 18px;
    }
    
    .notification-content p {
        margin: 0;
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.4;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = successStyles;
document.head.appendChild(styleSheet);
