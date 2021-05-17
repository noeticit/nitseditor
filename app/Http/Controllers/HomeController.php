<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function login(){
        return Inertia::render('new-login');
    }

    public function ForgotPassword(){
        return Inertia::render('forgot-password');
    }

    public function Register(){
        return Inertia::render('new-registration');
    }

    public function AppMarket(){
        return Inertia::render('app-market');
    }

    public function Sample(){
        return Inertia::render('sample');
    }


    public function Menus(){
        return Inertia::render('nav-menus');
    }
    public function ManageLocation(){
        return Inertia::render('manage-location');
    }

    public function AppMarketDetail(){
        return Inertia::render('nitseditor-app-markets-detail');
    }

    public function pageRender($page)
    {
        return Inertia::render('page-renderer', [
            'layout' => 1
        ]);
    }

    public function TableMenu(){
        return Inertia::render('table-menu');
    }

    public function AboutUs(){
        return Inertia::render('about-us');
    }
    public function Builder(){
        return Inertia::render('page-builder');
    }
    public function Section(){
        return Inertia::render('added-section');
    }
}
