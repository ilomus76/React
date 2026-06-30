<?php
    header('Content-Type:text/plain; charset=utf-8');
    // 1)글씨 데이타 받기
    $nickname = $_POST['nickname'];
    echo "닉네임: $nickname \n\n";
    //json이 아닐 경우 글씨만 보내면 됨. 


    // 2) 전송된 파일들의 실제 데이타는 임시저장소에 있고... 여기는 팡리 정보만 오게 됨
    // name ,size, type,error
    $files = $_FILES['img']; // 식별자

    //여러개의 파일을 보낼 수 있기에 .. 파일의 개수 얻어오기 
    $file_num = count($files['name']);
    echo "전송된 파일의 개수: $file_num \n" ;
    echo "===============================";
    //파일 개수만큼 반복하면서 파일정보 응답...임시저장소의 파일을 서버에 저장
    for($i=0;$i<$file_num;$i++){
        $filename = $files['name'][$i];
        $filesize = $files['size'][$i];
        $tempname = $files['tmp_name'][$i]; // 임시저장소의 파일 위치

        move_uploaded_file($tempname,"./uploaded/" . $filename);  // 결합 . 덮어쓰기
        echo "$filename \n";
        echo "$filesize \n";
        echo "--------- \n";
    }
?>