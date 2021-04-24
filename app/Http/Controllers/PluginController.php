<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use ZanySoft\Zip\Zip;
use ZipArchive;
use Illuminate\Support\Facades\File;

class PluginController extends Controller
{
    public function install()
    {
//
//        $url = 'https://nitseditor.s3.ap-south-1.amazonaws.com/plugins/noetic/excel/excel.zip';
//        $guzzle = new Client();
//        $response = $guzzle->get($url);
//        Storage::put('myfile.zip', $response->getBody());

//        $filename = 'temp.zip';
//        $tempImage = tempnam(sys_get_temp_dir(), $filename);
//        copy('https://nitseditor.s3.ap-south-1.amazonaws.com/plugins/noetic/excel/excel.zip', $tempImage);
//
//        return response()->download($tempImage, $filename);
//        $zip = '/public/project-assets/excel.zip';
//        $zip->extract('/storage/app/');

        $path = 'excel.zip';

        $zip = new ZipArchive;
        $res = $zip->open($path);
//        dd($res);
        if ($res === TRUE) {
            $zip->extractTo(base_path('plugins/'));
            $zip->close();
            echo 'success!';
        } else {
            echo 'failed!';
        }





//        fs.readdirSync(directory, {withFileTypes: true}).forEach((entry,index) => {
//        let fullPath = path.join(directory, entry.name);
//         if(entry.isFile()){
//             if(entry.name.includes('.vue')) {
//                 let comp = entry.name.replace('.vue', '');
//                let name;
//
//                name = namePrefix ? namePrefix.toLowerCase()+'-'+comp.toLowerCase() : comp.toLowerCase();
//
//                filecontents = filecontents + `\t{\n\t\t id: \'${index}\',\n\t\t name: \'${comp}\',\n\t\t component_name: \'${name}\',\n\t\t accordion: 'Form Elements',\n\t\t options: {}\n\t},\n`;
//
//            }
//         } else {
//             // apparently there are some other things that could be here
//             // like a symlink, so this is defensive coding
//             console.log(`unexpected type: ${fullPath}`);
//         }
//    });
//
//    return filecontents;


        /*
         * Step 1: Take zip file from url (Static URL..Dynamic) https://nitseditor.s3.ap-south-1.amazonaws.com/plugins/noetic/excel/excel.zip
         * Step 2: Unzip into plugins directory
         */
    }

    public function uninstall()
    {

    }

    public function activate()
    {

    }

    public function deactivate()
    {

    }
}
