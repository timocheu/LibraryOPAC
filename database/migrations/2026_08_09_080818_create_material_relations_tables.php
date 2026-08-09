<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('author_material', function (Blueprint $table) {
            $table->foreignId('author_id')->constrained('authors')->cascadeOnDelete();
            $table->foreignId('material_id')->constrained('materials')->cascadeOnDelete();
            $table->foreignId('author_type_id')->constrained('author_types')->cascadeOnDelete();

            $table->primary(['author_id', 'material_id', 'author_type_id']);
        });

        Schema::create('educational_level_material', function (Blueprint $table) {
            $table->foreignId('educational_level_id')->constrained('educational_levels')->cascadeOnDelete();
            $table->foreignId('material_id')->constrained('materials')->cascadeOnDelete();

            $table->primary(['educational_level_id', 'material_id']);
        });

        Schema::create('material_tag', function (Blueprint $table) {
            $table->foreignId('material_id')->constrained('materials')->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();

            $table->primary(['material_id', 'tag_id']);
        });

        Schema::create('material_copies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('material_id')->constrained('materials')->cascadeOnDelete();
            $table->string('accession_no')->nullable()->unique();
            $table->string('call_no')->nullable();
            $table->foreignId('location_id')->constrained('locations')->cascadeOnDelete();
            $table->string('shelf_no')->nullable();
            $table->foreignId('status_id')->constrained('material_statuses')->cascadeOnDelete();
            $table->boolean('is_borrowable')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_copies');
        Schema::dropIfExists('material_tag');
        Schema::dropIfExists('educational_level_material');
        Schema::dropIfExists('author_material');
    }
};
