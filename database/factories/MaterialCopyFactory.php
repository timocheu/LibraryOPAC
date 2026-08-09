<?php

namespace Database\Factories;

use App\Models\Location;
use App\Models\Material;
use App\Models\MaterialCopy;
use App\Models\MaterialStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<MaterialCopy>
 */
class MaterialCopyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'material_id' => Material::factory(),
            'accession_no' => fake()->unique()->bothify('ACC-####'),
            'call_no' => fake()->bothify('?? ####'),
            'location_id' => Location::firstOrCreate([
                'name' => fake()->randomElement(['Main Library', 'Reserve Section', 'Archives', 'Periodicals Section']),
            ]),
            'shelf_no' => fake()->boolean(30) ? fake()->bothify('Shelf-###') : null,
            'status_id' => MaterialStatus::firstOrCreate([
                'name' => fake()->randomElement(['Available', 'Borrowed', 'Reserved', 'Lost', 'Withdrawn']),
            ]),
            'is_borrowable' => fake()->boolean(),
        ];
    }
}
