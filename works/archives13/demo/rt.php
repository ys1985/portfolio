<?php
    $iad = "?iad=" . htmlspecialchars($_GET['iad'], ENT_QUOTES);
    $redirect_url = "./";

    header( "Cache-Control: private, max-age=0, no-cache" );
    header( "Location: ". $redirect_url . $iad );
?>
