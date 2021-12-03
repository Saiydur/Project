import React from "react";

const Install = () => {
    return (
        <div className="container">
            <h1 className="text-center">How to Install The FrameWorks</h1>
            <div className="container mb-4">
                <h1>Front End - React JS</h1>
                <p>Make Sure That You Have Latest Version Of Node JS And PHP</p>
                <p>After Successfully Installed NPM Follow The Steps</p>
                <h3>Step 1:<br/><span>
                <code>composer create-project laravel/laravel --prefer-dist laravel-react-js
                </code></span></h3>
                <h3>Step 2:<br/>
                <code>cd laravel-react-js</code></h3>
                <h3>Step 3:<br/>
                <code>composer require laravel/ui</code></h3>
                <h3>Step 4:<br/>
                <code>php artisan ui react</code></h3>
                <h3>Step 5:<br/>
                <code>npm install</code></h3>
                <strong>All Codes Need To Run At Particular Folder In Command Prompt</strong>
            </div>
            <div className="container mb-4">
                <h1>Back End - Laravel</h1>
                <p>Make Sure That You Have Latest Version Of PHP And Apache Server</p>
                <p>After Successfully Installed PHP And XAMMP Follow The Steps</p>
                <h3>Step 1:<br/><span>
                <code>composer create-project laravel/laravel --prefer-dist sample-project
                </code></span></h3>
                <h3>Step 2:<br/>
                <code>cd sample-project</code></h3>
                <h3>Step 3:<br/>
                <code>php artisan serve</code></h3>
                <strong>All Codes Need To Run At Particular Folder In Command Prompt</strong>
            </div>
        </div>
        
    );
}
export default Install;