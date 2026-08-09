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
            $table->foreignId('category_id')->nullable()->constrained('material_categories')->nullOnDelete();
            $table->foreignId('program_id')->nullable()->constrained('programs')->nullOnDelete();
            $table->foreignId('college_id')->nullable()->constrained('colleges')->nullOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('edition')->nullable();
            $table->unsignedSmallInteger('year_published')->nullable();
            $table->string('publication')->nullable();
            $table->string('series')->nullable();
            $table->text('notes')->nullable();
            $table->text('summary')->nullable();
            $table->string('subject')->nullable();
            $table->string('isbn')->nullable()->unique();
            $table->unsignedInteger('page_count')->nullable();
            $table->string('issue_number')->nullable();
            $table->string('volume_number')->nullable();
            $table->string('source_title')->nullable();
            $table->string('issn')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
        });

        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
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
