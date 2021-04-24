<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');


Route::get('/nits-admin/login', [\App\Http\Controllers\HomeController::class, 'login']);
Route::get('/nits-admin/forgot-password', [\App\Http\Controllers\HomeController::class, 'ForgotPassword']);
Route::get('/nits-admin/register', [\App\Http\Controllers\HomeController::class, 'Register']);
Route::get('/nits-admin/app-market', [\App\Http\Controllers\HomeController::class, 'AppMarket']);
