<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SISGEP - Controle de Ponto PMBV</title>
    @livewireStyles
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/styles.css') }}">

    <link rel="icon" href="{{ url('favicon.ico') }}">
</head>

<body>
    <!-- Preloader -->
    <div class="spinner-wrapper">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
    <!-- end of preloader -->

    <livewire:header />
    <livewire:header-content />
    {{-- <livewire:costumers> </livewire:costumers> --}}
    {{-- <livewire:services /> --}}
    <livewire:details.details />
    {{-- <livewire:pricing /> --}}
    <livewire:video />
    {{-- <livewire:testimonials /> --}}
    <livewire:about />
    <livewire:request />
    {{-- <livewire:contact /> --}}
    <livewire:footer />


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