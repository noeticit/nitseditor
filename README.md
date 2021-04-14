## About NitsEditor

Simple CMS crafted on Laravel application.

# Installing NitsEditor

Crafting out the directory via composer

`composer create-project  --prefer-dist noeticit/nitseditor nitseditor`

Installing node dependencies:

`npm install`

Creating database in your local system do the configuration in .env file and run below command:

`php artisan migrate`
`php artisan db:seed`

To launch the app, you either need to configure your virtual host, or you can run:

`php artisan serve`


