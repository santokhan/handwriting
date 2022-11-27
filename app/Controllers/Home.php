<?php

namespace App\Controllers;

class Home extends BaseController
{
    public static function index()
    {
        return view('english');
    }
    public static function signup()
    {
        return view('signup');
    }
    public static function singin()
    {
        return view('singin');
    }
    public static function forgot()
    {
        return view('forgot');
    }
    public static function english()
    {
        return view('english');
    }
    public static function bengali()
    {
        return view('bengali');
    }
    public static function urdu()
    {
        return view('urdu');
    }
}