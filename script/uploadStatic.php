<?php
// 静态文件上传脚本
require 'vendor/autoload.php';

$appId     = '1252168851';
$secretId  = 'AKID78zfDaUmeLqz4xh9TioiU6WmqiPuLTTG';
$secretKey = 'mNm4B6pOlyzoQr7BA5pNlx7BDE6mGXmN';
$region    = 'bj';
$bucket    = 'mini-program' . '-' . $appId;    // V5版本的sdk必须这样写bucket

$cosClient = new Qcloud\Cos\Client([
  'region'      => $region,
  'credentials' => [
    'appId'     => $appId,
    'secretId'  => $secretId,
    'secretKey' => $secretKey,
  ]
]);

$staticDir = str_replace('/', DIRECTORY_SEPARATOR, __DIR__ . '/../src/images');    // 静态资源目录
$srcDir    = 'images';                      // 腾讯云上的文件夹名
tree($arr, $staticDir);                     // 获取所有文件路径
echo "开始上传静态文件\n";
foreach ($arr as $k => $v) {
  try {
    // 获取src/images目录下的所有文件并上传
    $key   = 'composer.json';
    $res   = $cosClient->Upload($bucket, $srcDir . $v, fopen($staticDir . $v, 'rb'));
    echo "上传成功:{$v}\n";
  } catch (\Exception $exception) {
    echo "上传失败:{$v}:" . $exception->getMessage() . "\n";
  }
}
echo "静态文件上传完成!";


/**
 * 递归获取文件路径
 * @param $arr_file
 * @param $directory
 * @param string $dir_name
 */
function tree(&$arr_file, $directory, $dir_name = '')
{
  $myDir = dir($directory);
  while ($file = $myDir->read()) {
    if ((is_dir("$directory/$file")) && ($file != ".") && ($file != "..")) {
      tree($arr_file, "$directory/$file", "$dir_name/$file");
    } elseif (($file != ".") && ($file != "..")) {
      $arr_file[] = "$dir_name/$file";
    }
  }
  $myDir->close();
}
