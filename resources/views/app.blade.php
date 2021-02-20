<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="Nitish Kumar">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ config('nitseditor.favicon') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>
<body>

 @inertia

<script src="{{ mix('js/app.js') }}"></script>

 <script>

 </script>

</body>
</html>
