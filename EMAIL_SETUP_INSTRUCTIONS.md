# Contact Form Email Setup Instructions

Your contact form is now configured to send emails to `info@hindsightonline.co.za`. Here are several options to make it work:

## Option 1: Formspree (Recommended - Easiest)

### Setup Steps:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like `xpzgkdyb`)
5. Replace `YOUR_FORM_ID` in `contact.html` with your actual form ID:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xpzgkdyb" method="POST">
   ```
6. Update the `_next` hidden field with your actual domain:
   ```html
   <input type="hidden" name="_next" value="https://yourdomain.com/contact.html?success=true">
   ```

### Features:
- ✅ Free tier: 50 submissions/month
- ✅ Automatic spam protection
- ✅ Email notifications to your inbox
- ✅ No server setup required
- ✅ Works immediately

---

## Option 2: EmailJS (Alternative)

### Setup Steps:
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Add the EmailJS library to your HTML:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
6. Update the `sendEmailViaEmailJS` function in `contact.js` with your credentials

### Features:
- ✅ Free tier: 200 emails/month
- ✅ Custom email templates
- ✅ Multiple email services
- ✅ Client-side only

---

## Option 3: cPanel Email Form (Server-side)

If your cPanel hosting supports PHP, you can create a server-side script:

### Create `send-email.php`:
```php
<?php
if ($_POST) {
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['_replyto']);
    $subject = strip_tags($_POST['_subject']);
    $message = strip_tags($_POST['message']);
    
    $to = 'info@hindsightonline.co.za';
    $email_subject = "Contact Form: " . $subject;
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";
    
    if (mail($to, $email_subject, $email_body, $headers)) {
        header('Location: contact.html?success=true');
    } else {
        header('Location: contact.html?error=true');
    }
    exit;
}
?>
```

### Update form action in `contact.html`:
```html
<form class="contact-form" id="contactForm" action="send-email.php" method="POST">
```

---

## Option 4: Netlify Forms (If hosting on Netlify)

Simply add `netlify` attribute to your form:
```html
<form class="contact-form" id="contactForm" netlify>
```

---

## Current Form Configuration

Your form is currently set up with:
- ✅ Proper field names for Formspree
- ✅ Success/error message handling
- ✅ Loading states and animations
- ✅ Form validation
- ✅ Responsive design
- ✅ Accessibility features

## Testing

1. After setting up any option above, test the form
2. Check your spam folder for test emails
3. Verify the success message appears
4. Ensure form resets after submission

## Troubleshooting

### Common Issues:
- **Form not submitting**: Check the action URL is correct
- **Not receiving emails**: Check spam folder, verify email address
- **Error messages**: Check browser console for JavaScript errors
- **Formspree issues**: Verify form ID and domain settings

### Contact Information Update

I noticed your contact form shows `accounts@hindsightonline.co.za` but you want emails sent to `info@hindsightonline.co.za`. 

Would you like me to update the displayed email addresses throughout the site to match `info@hindsightonline.co.za`?

## Recommended Next Steps

1. **Choose Option 1 (Formspree)** for the quickest setup
2. Test the form thoroughly
3. Monitor email delivery
4. Consider upgrading to paid plan if you exceed free limits

The form is now ready to work with any of these email services! 