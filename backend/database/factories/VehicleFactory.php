<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

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
        // $dummy_source_url = 'https://picsum.photos/400';  backend quebrado, erro 503 muito frequente

        $hexadecimal = str_pad(dechex(random_int(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
        $dummy_source_url = 'https://placehold.co/400x400/'.$hexadecimal.'/FFFFFF.png';
        $image_name = 'image-'.random_int(0, 10000).'.jpg';
        $image_path = 'vehicles/'.$image_name;

        // Esse storage baixa o conteúdo da url fornecida (cada acesso dessa específica entrega uma imagem diferente, não sendo assim necessário mudar a url toda vez) e armazena em image_path, na pasta public.
        Storage::disk('public')->put($image_path, file_get_contents($dummy_source_url));

        return [
            'name' => fake()->firstNameMale(),
            'brand' => fake()->lastName(),
            'manufacture_year' => fake()->year('now'),
            'image' => $image_path,
            'price' => fake()->randomFloat(2, 10000, 1000000),
            'remaining_units' => fake()->randomNumber(2, true),
        ];
    }
}
