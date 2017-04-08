/**
 * Created by stefan on 3/16/17.
 */
jQuery(document).ready(function($) {
    var base = drupalSettings.path.baseUrl + 'themes/custom/degroote/';
    $(".header-front").backstretch([
        base + "images/materiaal-3-min.jpg",
        base + "images/materiaal-2-min.jpg",
        base + "images/materiaal-1-min.jpg"
    ], {
        fade: 850,
        duration: 6000
    });
});
