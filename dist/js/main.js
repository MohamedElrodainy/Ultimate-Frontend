$(function() {

    'use strict';

    $('.toggle-sidebar').on('click', function() {
        $('.content-area, .sidebar').toggle('.no-sidebar');
    });
});