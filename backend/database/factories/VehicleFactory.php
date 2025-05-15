<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->firstNameMale(),
            'brand' => fake()->lastName(),
            'manufacture_year' => fake()->year('now'),
            'image' => $this->generateImage(),
            'price' => fake()->randomFloat(2, 10000, 1000000),
            'remaining_units' => fake()->numberBetween(1, 10),
        ];
    }

    public function generateImage(): string
    {
        $hexadecimal = str_pad(dechex(random_int(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
        $dummy_source_url = 'https://placehold.co/400x400/'.$hexadecimal.'/FFFFFF.png';

        return $dummy_source_url;
    }
}
