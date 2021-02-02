<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function getUsersOfChat()
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

        // get usuarios all
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

        // preparando array all_users
        $all_users = [];
        foreach ($users as $user) {
            array_push($all_users, $user);
        }
        
        // preparando array usersSolvers
        $usersSolvers = [];
        foreach ($users as $user) {
            array_push($usersSolvers, $solvers_users);
        }

        $auth_is_solver = User::find(auth()->user()->id)->roles->contains('name', 'solucionador');
        $auth_is_admin = User::find(auth()->user()->id)->roles->contains('name', 'administrador');

        if ($auth_is_solver || $auth_is_admin) {
            return response()->json(['chatUsers' => $all_users]);
        } else {
            return response()->json(['chatUsers' => $usersSolvers]);
        }
    }

    public function getMessages()
    {
        $messages = Message::all();
        return response()->json(['messages' => $messages]);
    }

    // public function getMessagesOfCall($call_id, $userFrom, $userTo)
    // {
    //     $messages = Message::where([
    //         ['call_id', $call_id],
    //         ['from', $userFrom],
    //         ['to', $userTo],
    //     ])->orWhere([
    //         ['call_id', $call_id],
    //         ['from', $userTo],
    //         ['to', $userFrom],
    //     ])->get();

    //     return response()->json(['currentMessages' => $messages]);
    // }

    public function sendMessage(Request $request)
    {
        Message::create($request->all());

        return response('success', 200);

    }
}
