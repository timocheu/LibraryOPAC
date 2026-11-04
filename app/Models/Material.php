<?php

namespace App\Models;

use Database\Factories\MaterialFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $material_type_id
 * @property int $category_id
 * @property string $title
 * @property string|null $description
 * @property string|null $edition
 * @property int|null $year_published
 * @property string|null $publishing_company
 * @property string|null $place_of_publication
 * @property string|null $series
 * @property string|null $notes
 * @property string|null $summary
 * @property string|null $subject
 * @property string|null $isbn
 * @property int|null $page_count
 * @property string|null $issue_number
 * @property string|null $volume_number
 * @property string|null $source_title
 * @property string|null $issn
 * @property string|null $file_path
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['material_type_id', 'category_id', 'title', 'description', 'edition', 'year_published', 'publishing_company', 'place_of_publication', 'series', 'isbn', 'issn', 'page_count', 'issue_number', 'volume_number', 'source_title', 'subject', 'notes', 'summary', 'file_path'])]
#[Hidden(['file_path'])]
class Material extends Model
{
    /** @use HasFactory<MaterialFactory> */
    use HasFactory;

    public function materialType(): BelongsTo
    {
        return $this->belongsTo(MaterialType::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(MaterialCategory::class);
    }

    public function copies(): HasMany
    {
        return $this->hasMany(MaterialCopy::class);
    }

    public function authors(): BelongsToMany
    {
        return $this->belongsToMany(Author::class)->withPivot('author_type_id');
    }

    public function educationalLevels(): BelongsToMany
    {
        return $this->belongsToMany(EducationalLevel::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'year_published' => 'integer',
            'page_count' => 'integer',
        ];
    }
}
