const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.styles([
    'resources/css/bootstrap.css',
    'resources/css/fontawesome-all.css',
    'resources/css/magnific-popup.css',
    'resources/css/swiper.css',
    'resources/css/styles.css',
], 'public/css/styles.css')

mix.copy([
    'resources/js/bootstrap.min.js',
    'resources/js/jquery.min.js',
    'resources/js/jquery.easing.min.js',
    'resources/js/jquery.magnific-popup.js',
    'resources/js/popper.min.js',
    'resources/js/swiper.min.js',
    'resources/js/validator.min.js',
    'resources/js/scripts.js',
], 'public/js')

mix.browserSync({
    proxy: 'localhost:8000'
})