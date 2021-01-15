<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppSettingsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('app_settings')->insert([
            [
                'key' => 'app_name',
                'value' => 'NitsEditor'
            ],
            [
                'key' => 'title',
                'value' => 'Noetic IT Services Pvt. Ltd.'
            ],
            [
                'key' => 'app_logo',
                'value' => '/logo/bx_logo.png'
            ],
            [
                'key' => 'layout',
                'value' => '3'
            ],
            [
                'key' => 'footer_about',
                'value' => ''
            ],
            [
                'key' => 'login_title',
                'value' => 'Welcome to Nitseditor '
            ],
            [
                'key' => 'login_subtitle',
                'value' => ''
            ],
            [
                'key' => 'copyright',
                'value' => '2019&nbsp;&copy;&nbsp;<a href="http://www.noeticitservices.com/" target="_blank" class="kt-link">Noetic IT Services Pvt. Ltd.</a>'
            ],
            [
                'key' => 'user_quick_actions',
                'value' => 'true'
            ],
        ]);

        DB::table('roles')->insert([
            [
                'name' => 'Super admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Subscriber',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Analyst',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);


    }
}
