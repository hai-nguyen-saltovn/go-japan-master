<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'url', 'email', 'phone','fax', 'contact_name', 'address', 'city', 'post_code',
        'country'
    ];
}
