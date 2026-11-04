<?php

use Illuminate\Support\Facades\Schema;

test('the database schema matches the library diagram', function () {
    expect(Schema::hasColumns('users', ['profile_path', 'role', 'status']))->toBeTrue();
    expect(Schema::hasColumns('materials', ['publishing_company', 'place_of_publication']))->toBeTrue();
    expect(Schema::hasColumn('materials', 'publication'))->toBeFalse();
    expect(Schema::hasTable('colleges'))->toBeFalse();
    expect(Schema::hasTable('programs'))->toBeFalse();
});

test('the library operations tables exist', function () {
    expect(Schema::hasTable('borrowings'))->toBeTrue();
    expect(Schema::hasTable('reservations'))->toBeTrue();
    expect(Schema::hasTable('fines'))->toBeTrue();
    expect(Schema::hasTable('attendances'))->toBeTrue();
    expect(Schema::hasTable('notifications'))->toBeTrue();
    expect(Schema::hasTable('feedback'))->toBeTrue();

    expect(Schema::hasColumns('borrowings', ['user_id', 'material_copy_id', 'borrowed_at', 'due_at', 'returned_at', 'status', 'processed_by']))->toBeTrue();
    expect(Schema::hasColumns('reservations', ['user_id', 'material_id', 'reserved_at', 'expires_at', 'status', 'fulfilled_at', 'cancelled_at']))->toBeTrue();
    expect(Schema::hasColumns('fines', ['borrowing_id', 'amount', 'reason', 'assessed_at', 'paid_at', 'status', 'recorded_by']))->toBeTrue();
    expect(Schema::hasColumns('attendances', ['user_id', 'attended_at', 'time_out']))->toBeTrue();
    expect(Schema::hasColumns('notifications', ['user_id', 'type', 'title', 'message', 'related_borrowing_id', 'related_reservation_id', 'related_fine_id', 'read_at']))->toBeTrue();
    expect(Schema::hasColumns('feedback', ['user_id', 'type', 'subject', 'message', 'status', 'librarian_response', 'responded_by', 'responded_at']))->toBeTrue();
});
