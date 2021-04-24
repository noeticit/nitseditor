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
}
