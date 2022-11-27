<?php
require 'vendor/autoload.php';

function sign_up()
{
    // $db = new \PDO('mysql:dbname=my-database;host=localhost;charset=utf8mb4', 'my-username', 'my-password');
    // or
    // $db = new \PDO('pgsql:dbname=my-database;host=localhost;port=5432', 'my-username', 'my-password');
    // or
    // $db = new \PDO('sqlite:../Databases/my-database.sqlite');

    // or

    // $db = \Delight\Db\PdoDatabase::fromDsn(new \Delight\Db\PdoDsn('mysql:dbname=my-database;host=localhost;charset=utf8mb4', 'my-username', 'my-password'));
    // or
    // $db = \Delight\Db\PdoDatabase::fromDsn(new \Delight\Db\PdoDsn('pgsql:dbname=my-database;host=localhost;port=5432', 'my-username', 'my-password'));
    // or
    // $db = \Delight\Db\PdoDatabase::fromDsn(new \Delight\Db\PdoDsn('sqlite:../Databases/my-database.sqlite'));

    $db = new \PDO('mysql:dbname=auth;host=localhost;charset=utf8mb4', 'root', '');

    $auth = new \Delight\Auth\Auth($db);


    try {
        $userId = $auth->register("santokhan1999@gmail.com", "726865426", null, function ($selector, $token) {
            echo 'Send ' . $selector . ' and ' . $token . ' to the user (e.g. via email)';
            echo '  For emails, consider using the mail(...) function, Symfony Mailer, Swiftmailer, PHPMailer, etc.';
            echo '  For SMS, consider using a third-party service and a compatible SDK';
        });

        echo 'We have signed up a new user with the ID ' . $userId;
    } catch (\Delight\Auth\InvalidEmailException $e) {
        die('Invalid email address');
    } catch (\Delight\Auth\InvalidPasswordException $e) {
        die('Invalid password');
    } catch (\Delight\Auth\UserAlreadyExistsException $e) {
        die('User already exists');
    } catch (\Delight\Auth\TooManyRequestsException $e) {
        die('Too many requests');
    }
}


?>


<section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            Flowbite
        </a>
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create and account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Create
                        an account</button>
                    <p class="text-sm font-light text-gray-500">
                        Already have an account? <a href="signin.php" class="font-medium text-primary-600 hover:underline">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>