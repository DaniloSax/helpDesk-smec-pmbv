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
        // get usuarios solucionadores
        $solvers_users = User::with([
            'roles' => function ($query) {
                return $query->where('name', 'solucionador');
            }
        ])
            ->get()
            ->filter(function ($user) {
                return $user->roles->count() > 0;
            });

        $users = User::with([
            'roles' => function ($query) {
                return $query->where('name', '!=', 'solucionador');
            }
        ])
            ->where('id', '!=', auth()->user()->id)
            ->get()
            ->filter(function ($user) {
                return $user->roles->count() > 0;
            });

        // preparando array
        $all_users = [];
        foreach ($users as $user) {
            array_push($all_users, $user);
        }

        $auth_is_solver = User::find(auth()->user()->id)->roles->contains('name', 'solucionador');
        $auth_is_admin = User::find(auth()->user()->id)->roles->contains('name', 'administrador');

        if ($auth_is_solver || $auth_is_admin) {
            return response()->json(['chatUsers' => $all_users]);
        } else {
            return response()->json(['chatUsers' => $solvers_users]);
        }
    }

    public function getMessages()
    {
        // $messages = Message::where([
        //     ['from', auth()->user()->id],
        //     ['to', auth()->user()->id],
        // ])->orWhere([
        //     ['to', auth()->user()->id],
        //     ['from', auth()->user()->id],
        // ])->get();

        $messages = Message::all();
        return response()->json(['messages' => $messages]);
    }
}
