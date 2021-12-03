import React from "react";

const Tuitorial = () => {
    return (
        <div className="container">
            <div className="row m4 p4">
                <div className="col-md-12">
                    <h1 className="text-center">Tuitorial</h1>
                </div>
            </div>
            <div className="row m4 p4">
                <div className="col-md-12 text-center ">
                    <h4 className="p-4 m-4">Getting Started With Laravel(PHP Framework)</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <h6>Install Composer,PHP,NODEJS,XAMMP</h6>
                        </li>
                        <li>
                            <h6>Create Folder And Open Command Prompt</h6>
                        </li>
                        <li>
                            <h5>Type or Copy <br /> <code style={{fontSize:"20px"}}>composer create-project laravel/laravel --prefer-dist sample-project</code></h5>
                        </li>
                        <li><code style={{fontSize:"20px"}}>cd sample-project</code></li>
                        <li><code style={{fontSize:"20px"}}>php artisan serve</code></li>
                    </ul>
                    <p>Boom Your Browser Will Automatically Open And Show Laravel Page</p>
                </div>
            </div>
            <div className="row m-4 p4">
                <div className="col-md-12 text-center ">
                    <h4 className="p-4 m-4">Getting Started With React JS(JavaScript Frontend Library)</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <h6>Go Previous Laravel Project Folder</h6>
                        </li>
                        <li>
                            <h6>Open Command Prompt</h6>
                        </li>
                        <li>
                            <h5>Type or Copy <br /> <code style={{fontSize:"20px"}}>composer require laravel/ui</code></h5>
                        </li>
                        <li><code style={{fontSize:"20px"}}>php artisan ui react</code></li>
                        <li><code style={{fontSize:"20px"}}>npm install</code></li>
                    </ul>
                    <div>
                        <p>composer will create node modules and package.json where react will be installed <br/>Go To</p>
                    </div>
                    <div>
                        <code style={{fontSize:"20px"}}>
                            'resources/sass/app.scss'
                        </code>
                        <p>
                            and import react <br /> again go to
                        </p>
                        <code style={{fontSize:"20px"}}>
                            'resources/view/welcome.blade.php'
                        </code>
                        <p>and paste this code</p>
                        <code style={{fontSize:"20px"}}>
                            'div id = "example"'
                        </code>
                        <p>If you want to create new things then go to js folder and create new js file and call at example js</p>
                    </div>
                </div>
            </div>
            <div className="row m-4 p4">
                <div className="col-md-12 text-center ">
                    <h1>You Can Copy Paste This Codes</h1>
                <textarea className="form-control p-4" rows={12} 
                defaultValue=
                {`composer create-project laravel/laravel --prefer-dist sample-project\ncd sample-project\nphp artisan serve\ncomposer require laravel/ui\nphp artisan ui react\n
                <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Home</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <style>
            p{
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <!-- React DOM -->
        <div id="example"></div>

        <!-- React JS -->
        <script src="{{asset('js/app.js')}}" defer></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
`} >
                </textarea>
                </div>
            </div>
        </div>
    );
}
export default Tuitorial;