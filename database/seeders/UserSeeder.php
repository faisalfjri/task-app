<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Faisal Fajri',
                'email' => 'faisalfjrii@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'id' => 2,
                'name' => 'User Demo',
                'email' => 'user@gmail.com',
                'password' => Hash::make('password'),
            ],
        ];

        // Insert ke database
        User::insert($users);
    }
}
