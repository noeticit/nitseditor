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
Route::get('/nits-admin/app-market/nitseditor-app-markets-detail', [\App\Http\Controllers\HomeController::class, 'AppMarketDetail']);
Route::get('/nits-admin/table-menu', [\App\Http\Controllers\HomeController::class, 'TableMenu']);
Route::get('/nits-admin/aboutus', [\App\Http\Controllers\HomeController::class, 'AboutUs']);
Route::get('/nits-admin/app-market/{slug}', [\App\Http\Controllers\PluginController::class,'getPlugin'])->name('plugin.view');
Route::get('/sample', [\App\Http\Controllers\HomeController::class, 'Sample']);
Route::get('/nits-admin/nav-menus', [\App\Http\Controllers\HomeController::class, 'Menus']);
Route::get('/nits-admin/manage-location', [\App\Http\Controllers\HomeController::class, 'ManageLocation']);


Route::get('/{page}', [\App\Http\Controllers\HomeController::class, 'pageRender']);
