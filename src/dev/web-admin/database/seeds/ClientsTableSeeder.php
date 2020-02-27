<?php

use Illuminate\Database\Seeder;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();


        for ($i = 0; $i < 50; $i++) {
            \App\Model\Client::query()->create([
                'name' => $faker->company,
                'url' => $faker->url,
                'email' => $faker->email,
                'phone' => $faker->phoneNumber,
                'fax' => $faker->phoneNumber,
                'contact_name' => $faker->name(),
                'address' => $faker->address,
                'city' => $faker->city,
                'post_code' => $faker->postcode,
                'country' => 'JP'
            ]);
        }
    }
}
