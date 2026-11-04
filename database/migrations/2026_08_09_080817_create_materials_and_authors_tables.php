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
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('material_type_id')->constrained('material_types')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('material_categories')->cascadeOnDelete();
            $table->string('title')->index();
            $table->text('description')->nullable();
            $table->string('edition')->nullable();
            $table->smallInteger('year_published')->nullable()->index();
            $table->string('publishing_company')->nullable();
            $table->string('place_of_publication')->nullable();
            $table->string('series')->nullable();
            $table->string('isbn')->nullable()->index();
            $table->string('issn')->nullable()->index();
            $table->unsignedInteger('page_count')->nullable();
            $table->string('issue_number')->nullable();
            $table->string('volume_number')->nullable();
            $table->string('source_title')->nullable();
            $table->string('subject')->nullable();
            $table->text('notes')->nullable();
            $table->text('summary')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
            $table->index('material_type_id');
            $table->index('category_id');
        });

        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->string('name')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('authors');
        Schema::dropIfExists('materials');
    }
};
