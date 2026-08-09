<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MaterialLookupSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->seedLookup('material_types', [
            'Book',
            'Course Material',
            'Audio Visual Collection',
            'Journal',
            'E-Journal',
            'E-Resource',
            'Thesis',
            'Periodicals',
        ]);

        $this->seedLookup('material_categories', [
            'Fiction',
            'Non-Fiction',
            'Reference',
            'Textbook',
            'Periodical',
        ]);

        $this->seedLookup('author_types', [
            'Author',
            'Editor',
            'Translator',
            'Illustrator',
        ]);

        $this->seedLookup('educational_levels', [
            'Elementary',
            'Junior High School',
            'Senior High School',
            'College',
            'Post-Graduate',
        ]);

        $this->seedLookup('colleges', [
            'College of Arts and Sciences',
            'College of Nursing',
            'College of Engineering',
            'College of Computer Studies',
        ]);

        $this->seedLookup('locations', [
            'Main Library',
            'Reserve Section',
            'Archives',
            'Periodicals Section',
        ]);

        $this->seedLookup('material_statuses', [
            'Available',
            'Borrowed',
            'Reserved',
            'Lost',
            'Withdrawn',
        ]);
    }

    /**
     * Insert rows into a lookup table, skipping names that already exist.
     *
     * @param  array<int, string>  $names
     */
    private function seedLookup(string $table, array $names): void
    {
        $now = now();

        foreach ($names as $name) {
            DB::table($table)->updateOrInsert(
                ['name' => $name],
                ['name' => $name, 'created_at' => $now, 'updated_at' => $now],
            );
        }
    }
}
