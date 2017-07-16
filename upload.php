<?php

// take file name
$filename = $_FILES['file']['name'];

// location for storage
$location = './upload/';

// upload file function
// etc. => move_uploaded_file(filename, destination);
if (move_uploaded_file($_FILES['file']['uploaded'], $location.$filename)) {
	// return Array file name
	$arr = array('name' => $filename, 'status' => 'okay' );
} else {
	// return Array file name
	$arr = array('name' => $filename, 'status' => 'no' );
}


// response in JSON format
echo json_encode($arr); // encode -> turn array to JSON etc.
                        // decode -> turn JSON to array etc.


?>
