<?php
session_start();
if(session_destroy()) // Efface la session
{header("Location: login.php");} // Retour à la page du login
?>