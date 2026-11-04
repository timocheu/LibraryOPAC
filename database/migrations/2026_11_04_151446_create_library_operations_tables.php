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
        Schema::create('borrowings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('material_copy_id')->constrained('material_copies')->cascadeOnDelete();
            $table->timestamp('borrowed_at')->index();
            $table->timestamp('due_at')->index();
            $table->timestamp('returned_at')->nullable();
            $table->string('status')->default('borrowed')->index();
            $table->foreignId('processed_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->index('user_id');
            $table->index('material_copy_id');
        });

        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('material_id')->constrained('materials')->cascadeOnDelete();
            $table->timestamp('reserved_at')->index();
            $table->timestamp('expires_at')->nullable();
            $table->string('status')->default('pending')->index();
            $table->timestamp('fulfilled_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamps();
            $table->index('user_id');
            $table->index('material_id');
        });

        Schema::create('fines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('borrowing_id')->constrained('borrowings')->cascadeOnDelete();
            $table->decimal('amount', 10, 2);
            $table->string('reason');
            $table->timestamp('assessed_at')->index();
            $table->timestamp('paid_at')->nullable();
            $table->string('status')->default('unpaid')->index();
            $table->foreignId('recorded_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->index('borrowing_id');
        });

        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('attended_at')->index();
            $table->timestamp('time_out')->nullable();
            $table->timestamps();
            $table->index('user_id');
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('type')->index();
            $table->string('title');
            $table->text('message');
            $table->foreignId('related_borrowing_id')->nullable()->constrained('borrowings')->nullOnDelete();
            $table->foreignId('related_reservation_id')->nullable()->constrained('reservations')->nullOnDelete();
            $table->foreignId('related_fine_id')->nullable()->constrained('fines')->nullOnDelete();
            $table->timestamp('read_at')->nullable()->index();
            $table->timestamps();
            $table->index('user_id');
            $table->index('created_at');
        });

        Schema::create('feedback', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('type')->index();
            $table->string('subject')->nullable();
            $table->text('message');
            $table->string('status')->default('pending')->index();
            $table->text('librarian_response')->nullable();
            $table->foreignId('responded_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('responded_at')->nullable();
            $table->timestamps();
            $table->index('user_id');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('attendances');
        Schema::dropIfExists('fines');
        Schema::dropIfExists('reservations');
        Schema::dropIfExists('borrowings');
    }
};
