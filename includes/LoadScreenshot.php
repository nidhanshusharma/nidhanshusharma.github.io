<?php

class LoadScreenshot{
    public $data;
    function __construct($url, $stratergy){
        $this->data = file_get_contents("https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=".$url."&screenshot=true&strategy=".$stratergy."&fields=screenshot");
        $this->data = json_decode($this->data, true);
        
    }
    
    public function getScreenshot(){
        
        return str_replace(array('_','-'),array('/','+'), $this->data["screenshot"]["data"]);
        
    }
    
    public function getMimeType(){
        
        return $this->data["screenshot"]["mime_type"];
        
    }
    
}

//echo "<img src='data:"
//    .$googlePageSpeedData["screenshot"]["mime_type"].
//    ";base64,"
//    .$screenshot.
//    "' alt>";
//
//$googlePageSpeedData = file_get_contents("https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=".$siteurl."&screenshot=true&strategy=mobile&fields=screenshot");
//
//$googlePageSpeedData = json_decode($googlePageSpeedData, true);
//
//
//$screenshot = $googlePageSpeedData["screenshot"]["data"];
//$screenshot = str_replace(array('_','-'),array('/','+'), $screenshot);
//
//echo "<img src='data:"
//    .$googlePageSpeedData["screenshot"]["mime_type"].
//    ";base64,"
//    .$screenshot.
//    "' alt>";
?>