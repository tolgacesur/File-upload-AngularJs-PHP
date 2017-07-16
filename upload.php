<?php

// "Author" : Tolga CESUR


// for linux main temporary
$dizin = '/tmp/';  // For windows it can be C://Windows/Temp/

$name = $_FILES['file']['name'];  // file name on client side
$yuklenecek_dosya = $dizin.basename($_FILES["file"]["name"]);  // new temporary

// upload file function
// etc. => move_uploaded_file(filename, destination);
if (move_uploaded_file($_FILES['file']['tmp_name'], $yuklenecek_dosya))
{	
	//Make array for response
    $arr = array('name' => $name, 'status'=>'Başarı ile kayıt edildi.' );
    
    // convert the array to json 
    echo json_encode($arr); // encode -> turn array to JSON etc.
                            // decode -> turn JSON to array etc.

} else {
    $arr = array('name' => $name, 'status'=>'kayıt edilemedi.' );
    echo json_encode($arr);
}

?>