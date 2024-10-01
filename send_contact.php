<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Daten aus dem Formular holen
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // E-Mail-Inhalt
    $to = "gothlivion@gmail.com";
    $subject = "Neue Kontaktanfrage von $name";
    $body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";
    
    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht wurde gesendet.";
    } else {
        echo "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.";
    }
}
?>
