<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

class CallNotifyController extends Controller
{
    public function index()
    {

        // return response('index notification');

        $user = User::find(auth()->user()->id);

        return response($user->unreadNotifications);
    }

    public function markOnReadAll()
    {
        // return response('function markOnReadAll');
        $user = User::find(auth()->user()->id);
        // foreach ($user->unreadNotifications as $notification) {
        //     $notification->markAsRead();
        // }
        $user->unreadNotifications->markAsRead();
        return response($user->unreadNotifications, 200);
    }
    
    public function markOnRead($id)
    {
        return response('function markOnRead');

        $user = User::find(auth()->user()->id);

        foreach ($user->unreadNotifications as $notification) {
            if ($notification->id == $id) {
                $notification->markAsRead();
            } else continue;
        }

        return response($user->unreadNotifications, 200);
    }
}
