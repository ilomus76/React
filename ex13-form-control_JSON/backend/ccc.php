<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$result = [
    "success" => false,
    "message" => "",
    "file" => null
];

$file = $_FILES['img'] ?? null;

if ($file) {

    $name = $file['name'];
    $tmp = $file['tmp_name'];

    $target = "../uploaded/" . $name;

    $success = move_uploaded_file($tmp, $target);

    if ($success) {
        $result["success"] = true;
        $result["message"] = "업로드 성공했습니다.";
        $result["file"] = [
            "name" => $name,
            "path" => $target
        ];
    } else {
        $result["message"] = "업로드 실패했습니다.";
    }

} else {
    $result["message"] = "파일이 없습니다.";
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>