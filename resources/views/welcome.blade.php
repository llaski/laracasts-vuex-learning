<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="css/app.css">
        <style>
            body {
                display: flex;
                justify-content: center;
            }

            .level {
                display: flex;
                align-items: center;
            }

            .mb-1 {
                margin-bottom: 1rem;
            }

            li {
                margin: 1rem 0;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <todos></todos>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
