<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @livewireStyles
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/styles.css') }}">

    <link rel="icon" href="images/favicon.png">
</head>

<body>
    <livewire:header> </livewire:header>
    <livewire:costumers> </livewire:costumers>
    <livewire:services> </livewire:services>
    <livewire:details/details> </livewire:details/details> 
    <livewire:pricing> </livewire:pricing>
    <livewire:request> </livewire:request>
    <livewire:video> </livewire:video>
    <livewire:testimonials> </livewire:testimonials>
    <livewire:contact> </livewire:contact>
    <livewire:about> </livewire:about>
    <livewire:footer> </livewire:footer>


    @livewireScripts
    <script src="{{ mix('js/app.js') }}"></script>

    <script src="{{ mix('js/bootstrap.min.js') }}"></script>
    <script src="{{ mix('js/jquery.min.js') }}"></script>
    <script src="{{ mix('js/jquery.easing.min.js') }}"></script>
    <script src="{{ mix('js/jquery.magnific-popup.js') }}"></script>
    <script src="{{ mix('js/popper.min.js') }}"></script>
    <script src="{{ mix('js/swiper.min.js') }}"></script>
    <script src="{{ mix('js/validator.min.js') }}"></script>
    <script src="{{ mix('js/scripts.js') }}"></script>
</body>

</html>