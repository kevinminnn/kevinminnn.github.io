<?php
use \EmailJS\EmailJS;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Replace with your EmailJS service ID and template ID
    $serviceId = 'service_7d7mlrt';
    $templateId = 'template_ml1hheg';
    
    // Set your EmailJS user ID
    $userId = 'ab22xf25UtBr9Uw1J';
    
    $emailjs = new EmailJS($userId, $serviceId, $templateId);
    $result = $emailjs->send(array(
        'from_name' => $name,
        'from_email' => $email,
        'message' => $message,
    ));
    
    if ($result['status'] === 200) {
        echo 'Message sent. Thank you!';
    } else {
        echo 'An error occurred. Please try again later.';
    }
}
