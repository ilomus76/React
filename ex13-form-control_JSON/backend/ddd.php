<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$nickname = $_POST['nickname'] ?? '';

$files = $_FILES['img'] ?? null;

$result = [
    "nickname" => $nickname,
    "fileCount" => 0,
    "files" => []
];

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($files) {
    $file_num = count($files['name']);
    $result["fileCount"] = $file_num;

    for ($i = 0; $i < $file_num; $i++) {
        $filename = $files['name'][$i];
        $filesize = $files['size'][$i];
        $tempname = $files['tmp_name'][$i];

        $target = "../uploaded/" . $filename;

        $success = move_uploaded_file($tempname, $target);

        $result["files"][] = [
            "name" => $filename,
            "size" => $filesize,
            "uploaded" => $success,
            "path" => $target
        ];
    }
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>