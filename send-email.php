<?php
// Contact form email handler for cPanel hosting
// This script processes the contact form and sends emails to info@hindsightonline.co.za

// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and validate input data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['_replyto']) ? filter_var(trim($_POST['_replyto']), FILTER_VALIDATE_EMAIL) : '';
    $subject = isset($_POST['_subject']) ? strip_tags(trim($_POST['_subject'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    
    // Validation
    $errors = array();
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($subject)) {
        $errors[] = "Subject is required";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // Basic spam protection
    if (isset($_POST['honeypot']) && !empty($_POST['honeypot'])) {
        // Spam detected (honeypot field should be empty)
        header('Location: contact.html?error=spam');
        exit;
    }
    
    // If no errors, proceed with sending email
    if (empty($errors)) {
        
        // Email configuration
        $to = 'info@hindsightonline.co.za';
        $email_subject = 'Contact Form Submission: ' . $subject;
        
        // Create email body
        $email_body = "New contact form submission from Hindsight Consulting website:\n\n";
        $email_body .= "Name: " . $name . "\n";
        $email_body .= "Email: " . $email . "\n";
        $email_body .= "Subject: " . $subject . "\n";
        $email_body .= "Message:\n" . $message . "\n\n";
        $email_body .= "---\n";
        $email_body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
        $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
        $email_body .= "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n";
        
        // Email headers
        $headers = array();
        $headers[] = 'From: ' . $name . ' <noreply@' . $_SERVER['HTTP_HOST'] . '>';
        $headers[] = 'Reply-To: ' . $email;
        $headers[] = 'X-Mailer: PHP/' . phpversion();
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        
        // Send email
        $mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
        
        if ($mail_sent) {
            // Success - redirect with success parameter
            header('Location: contact.html?success=true');
            exit;
        } else {
            // Email failed to send
            error_log("Failed to send contact form email to: " . $to);
            header('Location: contact.html?error=email_failed');
            exit;
        }
        
    } else {
        // Validation errors
        $error_string = implode(',', $errors);
        header('Location: contact.html?error=validation&details=' . urlencode($error_string));
        exit;
    }
    
} else {
    // Not a POST request - redirect to contact page
    header('Location: contact.html');
    exit;
}
?> 