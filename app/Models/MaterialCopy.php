<?php

namespace App\Models;

use Database\Factories\MaterialCopyFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $material_id
 * @property string|null $accession_no
 * @property string|null $call_no
 * @property int $location_id
 * @property string|null $shelf_no
 * @property int $status_id
 * @property bool $is_borrowable
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['material_id', 'accession_no', 'call_no', 'location_id', 'shelf_no', 'status_id', 'is_borrowable'])]
class MaterialCopy extends Model
{
    /** @use HasFactory<MaterialCopyFactory> */
    use HasFactory;

    public function material(): BelongsTo
    {
        return $this->belongsTo(Material::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(MaterialStatus::class);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_borrowable' => 'boolean',
        ];
    }
}
