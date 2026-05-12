// Contact form: posts JSON to the Cloudflare Pages Function at /api/contact
// and shows a notification with the response.

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('.form-submit');
    const originalText = submitButton.innerHTML;

    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(form.action || '/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        let data = {};
        try {
            data = await response.json();
        } catch {
            // non-JSON response
        }

        if (response.ok && data.success) {
            showSuccessMessage();
            form.reset();
        } else {
            const errorMessage =
                (data && data.error) ||
                'Failed to send message. Please try again or email accounts@hindsightonline.co.za directly.';
            showErrorMessage(errorMessage);
        }
    } catch (error) {
        console.error('Contact form submission failed:', error);
        showErrorMessage(
            'Network error. Please check your connection and try again, or email accounts@hindsightonline.co.za.'
        );
    } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

function showSuccessMessage() {
    showNotification(
        'Message Sent Successfully!',
        "Thank you for your message. We'll get back to you within 24 hours.",
        'success'
    );
}

function showErrorMessage(message) {
    showNotification('Error', message, 'error');
}

function showNotification(title, message, type = 'success') {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = `notification-message ${type}-message`;
    notificationDiv.innerHTML = `
        <div class="notification-content">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(message)}</p>
        </div>
    `;

    const backgroundColor = type === 'success' ? 'var(--primary, #8bc34a)' : '#f44336';
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

    setTimeout(() => {
        notificationDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notificationDiv)) {
                document.body.removeChild(notificationDiv);
            }
        }, 300);
    }, 5000);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Animation styles for notifications
const notificationStyles = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
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
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
