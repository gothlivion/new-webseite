<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $vorname = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $nachricht = $_POST['message'] ?? '';

    $errors = [];

    if (empty($email)) {
        $errors[] = "E-Mail ist erforderlich.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Ungültige E-Mail-Adresse.";
    }

    if (empty($errors)) {

        $to = "gothlivion@gmail.com";  // Hier deine E-Mail-Adresse eintragen
        $subject = "Neue Kontaktanfrage von $vorname";
        $message = "Name: $vorname\n";
        $message .= "E-Mail: $email\n";
        $message .= "Nachricht: $nachricht\n";

        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo '<p style="color: ##5b5b5b; text-align: center;">Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.</p>';
        } else {
            echo '<p style="color: red; text-align: center;">Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.</p>';
        }
    } else {
        echo implode('<br>', $errors);
    }
} else {
    echo "Ungültige Anfrage.";
}
?>

