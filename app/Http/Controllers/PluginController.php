<?php

namespace App\Http\Controllers;

use App\Http\Resources\PluginResource;
use App\Models\NitsPlugin;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use ZipArchive;

class PluginController extends Controller
{
    public function install(Request $request)
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


        $user =  Str::lower(str_replace(' ','',$request->user_name));
        $plugin_name = $request->plugin_name;

        $path = 'excel.zip';

        $zip = new ZipArchive;
        $res = $zip->open($path);
        if ($res === TRUE) {
            $zip->extractTo(base_path('plugins/'.$user.'/'.$plugin_name.'/'));
            $zip->close();
            echo 'success!';
        } else {
            echo 'failed!';
        }

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


    public function plugins()
    {
        return PluginResource::collection(NitsPlugin::get()
        );
    }

    public function getPlugin($slug)
    {
        $plugin = NitsPlugin::where('plugin_slug', $slug)->first();

        return Inertia::render('nitseditor-app-markets-detail', ['data' => $plugin->load('author')]);
    }
}
