<?php

use App\Models\Author;
use App\Models\AuthorType;
use App\Models\EducationalLevel;
use App\Models\Location;
use App\Models\Material;
use App\Models\MaterialCopy;
use App\Models\MaterialStatus;
use App\Models\MaterialType;
use App\Models\Tag;

test('a material belongs to its catalog lookups', function () {
    $type = MaterialType::create(['name' => 'Book']);
    $material = Material::factory()->create(['material_type_id' => $type->id, 'category_id' => null]);

    expect($material->materialType->is($type))->toBeTrue();
    expect($material->category)->toBeNull();
});

test('a material links authors with their author types through the pivot', function () {
    $author = Author::factory()->create();
    $editorType = AuthorType::create(['name' => 'Editor']);
    $material = Material::factory()->create();

    $material->authors()->attach($author->id, ['author_type_id' => $editorType->id]);

    expect($material->authors)->toHaveCount(1);
    expect($material->authors->first()->is($author))->toBeTrue();
    expect($material->authors->first()->pivot->author_type_id)->toBe($editorType->id);
});

test('a material belongs to many educational levels and tags', function () {
    $level = EducationalLevel::create(['name' => 'College']);
    $tag = Tag::create(['name' => 'Mathematics']);
    $material = Material::factory()->create();

    $material->educationalLevels()->attach($level->id);
    $material->tags()->attach($tag->id);

    expect($material->educationalLevels->first()->is($level))->toBeTrue();
    expect($material->tags->first()->is($tag))->toBeTrue();
});

test('a material has many inventory copies', function () {
    $location = Location::create(['name' => 'Main Library']);
    $status = MaterialStatus::create(['name' => 'Available']);
    $material = Material::factory()->create();

    MaterialCopy::factory()->count(2)->create([
        'material_id' => $material->id,
        'location_id' => $location->id,
        'status_id' => $status->id,
    ]);

    expect($material->copies)->toHaveCount(2);
    expect($material->copies->first()->location->is($location))->toBeTrue();
    expect($material->copies->first()->status->is($status))->toBeTrue();
    expect($material->copies->first()->is_borrowable)->toBeBool();
});
