@component('mail::message')
# {{ $subject }}

<h1>{{ $name }}</h1>
<p>
    {{ $message }}
</p>

{{-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent --}}

{{-- A equipe do SISGEP agradece,<br> --}}
{{ config('app.name') }}
@endcomponent