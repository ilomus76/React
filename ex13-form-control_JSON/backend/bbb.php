<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

/* 딱 한 번만 읽기 */
$raw = file_get_contents("php://input");

/* debug */
//file_put_contents("debug.txt", $raw);

if (!$raw) {
    echo json_encode([
        "success" => false,
        "message" => "Empty request body"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($raw, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON",
        "error" => json_last_error_msg(),
        "raw" => $raw
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success" => true,
    "gender" => $data["gender"] ?? "",
    "brand" => $data["brand"] ?? "",
    "content" => $data["content"] ?? "",
    "fruits" => $data["fruits"] ?? []
], JSON_UNESCAPED_UNICODE);