$(function() {

    'use strict';

    $('.toggle-sidebar').on('click', function() {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

    $('.toggle-submenu').on('click', function() {

        $(this).find('.fa-angle-right').toggleClass('down');

        $(this).next('.child-links').slideToggle();
    });

    $('.notifications-container').on('click', function() {

        $(this).find('.dropdown-menu').slideToggle();

    });

    // open & close the full screen mode

    $('.toggle-fullscreen').on('click', function() {

        $(this).toggleClass('fullscreen');

        if ($(this).hasClass('fullscreen')) {

            openFullScreen();
        } else {
            closeFullScreen();
        }
    });

    $('.user-menu-container').on('click', function() {

        $(this).find('.user-submenu').slideToggle();
    });

    $('.toggle-settings').on('click', function() {

        $(this).find('i').toggleClass('fa-spin');
        $(this).parent('.setting-box').toggleClass('no-box');
    });
});

// these are the functions of opening and closing the full screen mode


var element = document.documentElement;

function openFullScreen() {
    if (element.requestFullScreen) {
        element.requestFullScreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.msRequestFullScreen) {
        element.msRequestFullScreen();
    }
}

function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}