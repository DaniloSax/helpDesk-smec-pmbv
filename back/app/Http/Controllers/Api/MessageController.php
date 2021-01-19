<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function getUsersSolvers()
    {
        $usersSolvers = User::with([
            'roles' => function ($query) {
                return $query->name === 'Solucionador';
            }
        ]);
        return response()->json(['usersSolvers' => $usersSolvers]);
    }

    public function getMessages()
    {
        $messages = Message::all();
        return response()->json(['messages' => $messages]);
    }
}
