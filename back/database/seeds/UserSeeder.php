<?php

use App\Models\Profile;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Role::create(['name' => 'administrador', 'guard_name' => 'api']);

        // user ADMINISTRADOR
        User::create([
            'name' => 'Danilo Veloso',
            'email' => 'danilovsdanilo@gmail.com',
            'email_verified_at' => now(),
            'password' =>  bcrypt('danilo123'), 
            'remember_token' => Str::random(10),
        ])->each( function ($user){
            $user->assignRole('administrador');
            factory(Profile::class, 1)->create(['user_id' => $user->id]);
            $user->assignRole('administrador');
        });

        // user DIRECIONADOR
        // User::create([
        //     'name' => 'Solucionador',
        //     'email' => 'solucionador@gmail.com',
        //     'email_verified_at' => now(),
        //     'password' =>  bcrypt('danilo123'), 
        //     'remember_token' => Str::random(10),
        // ])->each( function ($user){
        //     factory(Profile::class, 1)->create(['user_id' => $user->id]);
        //     $user->assignRole('solucionador');
        // });
    }
}
