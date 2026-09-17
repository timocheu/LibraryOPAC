<?php

use Inertia\Testing\AssertableInertia as Assert;

test('guests can visit the browse catalog page', function () {
    $response = $this->get(route('browse'));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page->component('browse'));
});
