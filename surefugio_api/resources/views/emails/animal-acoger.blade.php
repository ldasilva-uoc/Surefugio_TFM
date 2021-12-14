@component('mail::message')
# ¡Quiero acoger!
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => ''])
{{ config('app.name') }}
@endcomponent
@endslot

{{-- Body --}}

El usuario <b>{{$particular->nombre}}</b> quiere acoger a <b>{{$animal->nombre}}</b>. <p>Contacta con {{$particular->nombre}}:</p>
<ul>
    <li>Email: {{$userParticular->email}}</li>
    <li>Telefono: {{$particular->telefono}}</li>
</ul>
<br>
Muchas gracias!,<br>
{{ config('app.name') }}
@endcomponent
