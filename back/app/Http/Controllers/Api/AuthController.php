<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);

        $access_token = $user->createToken('tokenCreateUser');

        return response(['user' => $user, 'access_token' => $access_token], '200');
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required'],
        ]);

        if (!auth()->attempt($loginData)) {
            return response()->json(['message' => 'E-mail ou Senha incorreto!', 'status' => 400]);
        }

        $user = User::find(auth()->user()->id);
        
        $access_token = $user->createToken('accessToken')->accessToken;
        
        $user = User::with('profile', 'roles')->find(auth()->user()->id);
        
        return response(['user' => $user, 'access_token' => $access_token]);
    }

    public function logout(Request $request)
    {
        if (Auth::user()) {
            $request->user()->token()->delete();
            return response()->json([
                'success' => true,
                'message' => 'Logout realizado com sucesso!'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Unable to Logout'
            ]);
        }
    }

    public function auth()
    {
        if( auth()->check()){
            $user = User::with('profile', 'roles')->find(auth()->user()->id);
            return response()->json($user, 200);
        }
        return response()->json(['error' => 'sem autorizacao']);
    }
}
