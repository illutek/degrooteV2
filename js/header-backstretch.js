/**
 * Created by stefan on 3/16/17.
 */
jQuery(document).ready(function($) {
    var base = drupalSettings.path.baseUrl + 'themes/custom/degroote/';
    $("header").backstretch([
        base + "images/materiaal3.jpg",
        base + "images/materiaal2.jpg",
        base + "images/materiaal1.jpg"
    ], {
        fade: 850,
        duration: 6000
    });
});
