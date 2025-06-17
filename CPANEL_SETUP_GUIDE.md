# cPanel Contact Form Setup Guide

Your contact form is now configured to work with cPanel hosting using PHP. Follow these steps to get it working:

## 📁 Files Created/Modified

✅ **send-email.php** - PHP script to handle form submissions
✅ **contact.html** - Updated form to use PHP script
✅ **scripts/contact.js** - Enhanced error handling

## 🚀 Setup Steps

### 1. Upload Files to cPanel

1. Log into your cPanel hosting account
2. Open **File Manager**
3. Navigate to your website's **public_html** directory
4. Upload the following files:
   - `send-email.php` (in the root directory)
   - `contact.html` (replace existing)
   - `scripts/contact.js` (replace existing)

### 2. Set File Permissions

1. In File Manager, right-click on `send-email.php`
2. Select **Permissions**
3. Set permissions to **644** (Owner: Read+Write, Group: Read, World: Read)

### 3. Configure Email Settings

#### Option A: Use Default PHP Mail (Simplest)
- No additional setup required
- Uses your server's default mail configuration

#### Option B: Configure SMTP (Recommended)
If you want more reliable email delivery, you can modify the PHP script to use SMTP:

```php
// Add this to the top of send-email.php after <?php
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
```

### 4. Test the Form

1. Visit your website's contact page
2. Fill out the form with test data
3. Submit the form
4. Check your `info@hindsightonline.co.za` inbox
5. Also check spam/junk folder

## 🔧 Troubleshooting

### Common Issues:

#### Form Not Submitting
- **Check**: File permissions on `send-email.php` (should be 644)
- **Check**: PHP is enabled on your hosting
- **Check**: File path is correct in form action

#### Not Receiving Emails
- **Check**: Spam/junk folder
- **Check**: Email address `info@hindsightonline.co.za` is valid
- **Check**: cPanel error logs in **Error Logs** section

#### Permission Denied Errors
- **Fix**: Set `send-email.php` permissions to 644
- **Fix**: Ensure file is in public_html directory

#### 500 Internal Server Error
- **Check**: PHP syntax errors in `send-email.php`
- **Check**: Error logs in cPanel
- **Fix**: Remove the debug lines from PHP file:
  ```php
  // Remove these lines in production:
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  ```

### 5. Enable Error Logging (For Debugging)

1. In cPanel, go to **Error Logs**
2. Check for any PHP errors related to your contact form
3. Common errors and solutions:

| Error | Solution |
|-------|----------|
| `mail() function disabled` | Contact hosting provider to enable mail function |
| `Permission denied` | Check file permissions (644 for PHP files) |
| `Headers already sent` | Remove any spaces before `<?php` in send-email.php |

## 🔒 Security Features Included

✅ **Input Sanitization** - All form data is cleaned
✅ **Email Validation** - Email addresses are validated
✅ **Honeypot Protection** - Basic spam protection
✅ **XSS Protection** - HTML tags are stripped
✅ **Rate Limiting** - Can be added if needed

## 📧 Email Configuration

The form is configured to:
- **Send TO**: `info@hindsightonline.co.za`
- **Reply TO**: Customer's email address
- **From**: `noreply@yourdomain.com`
- **Subject**: "Contact Form Submission: [Customer Subject]"

## 🎯 What Happens When Form is Submitted

1. User fills out and submits form
2. PHP script validates all fields
3. Spam protection checks are performed
4. Email is sent to `info@hindsightonline.co.za`
5. User is redirected back with success/error message
6. JavaScript displays appropriate notification

## 📱 Features

✅ **Mobile Responsive** - Works on all devices
✅ **Real-time Validation** - Client-side validation
✅ **Loading States** - Visual feedback during submission
✅ **Success/Error Messages** - Clear user feedback
✅ **Spam Protection** - Honeypot field included
✅ **Professional Emails** - Formatted with all details

## 🔄 Testing Checklist

- [ ] Form loads correctly
- [ ] All fields are required and validate
- [ ] Submission shows "Sending..." state
- [ ] Success message appears after submission
- [ ] Email arrives at info@hindsightonline.co.za
- [ ] Reply-to address is set to customer's email
- [ ] Error handling works (test with invalid data)

## 📞 Next Steps

1. **Upload files** to your cPanel hosting
2. **Test thoroughly** with real data
3. **Check email delivery** (including spam folder)
4. **Monitor error logs** for any issues
5. **Remove debug code** from PHP file once working

## 🆘 Need Help?

If you encounter issues:
1. Check cPanel **Error Logs**
2. Verify file permissions
3. Test with simple data first
4. Contact your hosting provider if mail() function issues

Your contact form is now ready to work with cPanel hosting without any third-party dependencies! 