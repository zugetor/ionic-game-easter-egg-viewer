<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "mydb";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$method = $_GET['method'];
	header("Content-type: application/json");
	if($method === 'add'){
		$name = $_POST['name'];
		$detail = $_POST['detail'];
		$pic = $_POST['pic'];
		$egg_name = $_POST['egg_name'];
		$egg_detail = $_POST['egg_detail'];
		$egg_pic = $_POST['egg_pic'];

		$stmt = $conn->prepare("INSERT INTO post (name, detail, picture_url) VALUES (?, ?, ?)");
		$stmt->bind_param("sss", $name, $detail, $pic);
		$stmt->execute();
		$id = $stmt->insert_id;
		$exec = false;
		for ($x = 0; $x < count($egg_name); $x++) {
			$stmt2 = $conn->prepare("INSERT INTO egg (name, detail, picture_url,post_id) VALUES (?, ?, ?, ?)");
			$stmt2->bind_param("ssss", $egg_name[$x], $egg_detail[$x], $egg_pic[$x],$id);
			$exec = $stmt2->execute();
		}
		if ($exec) { 
		   echo json_encode(array("result"=>"OK"));
		} else {
		   echo json_encode(array("result"=>"Fail"));
		}
	}
	if($method === 'view'){
		$sql = "SELECT * FROM post;";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			$resultArray = array();			
			while($row = $result->fetch_assoc()) {
				$resultArray2 = array();
				$sql = "SELECT * FROM egg WHERE post_id =".$row['post_id'];
				$result2 = $conn->query($sql);
				if ($result2->num_rows > 0) {					
					while($row2 = $result2->fetch_assoc()) {
						array_push($resultArray2,$row2);
					}
				}
				$row["egg"] = $resultArray2;
				array_push($resultArray,$row);
			}
		}
		mysqli_close($conn);
		echo json_encode($resultArray);
	}
?>