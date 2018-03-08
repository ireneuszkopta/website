<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


mail("kopcikx@gmail.com","strona",$message . " " . $name . " " . $email);

echo "<script> $('#form').append('<p>message send!</p>'); </script>";
?>



