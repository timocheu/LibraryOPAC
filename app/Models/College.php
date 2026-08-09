<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['name'])]
class College extends Model
{
    public function programs(): HasMany
    {
        return $this->hasMany(Program::class);
    }

    public function materials(): HasMany
    {
        return $this->hasMany(Material::class);
    }
}
