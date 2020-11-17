<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Livewire\Livewire;

class HomeController extends Controller
{
    public function home()
    {
        return view('app'); 
    }
}
