<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int|null $college_id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['college_id', 'name'])]
class Program extends Model
{
    public function college(): BelongsTo
    {
        return $this->belongsTo(College::class);
    }

    public function materials(): HasMany
    {
        return $this->hasMany(Material::class);
    }
}
