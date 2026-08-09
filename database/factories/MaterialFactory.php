<?php

namespace Database\Factories;

use App\Models\College;
use App\Models\Material;
use App\Models\MaterialCategory;
use App\Models\MaterialType;
use App\Models\Program;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Material>
 */
class MaterialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'material_type_id' => fn () => MaterialType::firstOrCreate([
                'name' => fake()->randomElement(['Book', 'Course Material', 'Journal', 'Thesis', 'Reference']),
            ]),
            'category_id' => fn () => fake()->boolean(30)
                ? MaterialCategory::firstOrCreate([
                    'name' => fake()->randomElement(['Fiction', 'Non-Fiction', 'Reference', 'Textbook', 'Periodical']),
                ])
                : null,
            'program_id' => fn () => fake()->boolean(30)
                ? Program::inRandomOrder()->first() ?? Program::create(['name' => fake()->words(3, true)])
                : null,
            'college_id' => fn () => fake()->boolean(30)
                ? College::inRandomOrder()->first() ?? College::create(['name' => fake()->company().' College'])
                : null,
            'title' => fake()->sentence(5),
            'description' => fake()->paragraph(),
            'edition' => fake()->randomElement([null, fake()->randomDigitNotNull().' ed.']),
            'year_published' => fake()->numberBetween(1950, 2026),
            'publication' => fake()->company(),
            'series' => fake()->boolean(20) ? fake()->words(3, true) : null,
            'notes' => fake()->boolean(20) ? fake()->paragraph() : null,
            'summary' => fake()->boolean(40) ? fake()->paragraph(3) : null,
            'subject' => fake()->words(2, true),
            'isbn' => fake()->boolean(70) ? fake()->unique()->isbn13() : null,
            'page_count' => fake()->boolean(60) ? fake()->numberBetween(50, 2000) : null,
            'issue_number' => fake()->boolean(15) ? (string) fake()->numberBetween(1, 99) : null,
            'volume_number' => fake()->boolean(15) ? (string) fake()->numberBetween(1, 99) : null,
            'source_title' => fake()->boolean(15) ? fake()->words(4, true) : null,
            'issn' => fake()->boolean(15) ? fake()->unique()->numerify('####-####') : null,
            'file_path' => null,
        ];
    }
}
