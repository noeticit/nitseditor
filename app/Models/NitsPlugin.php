<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NitsPlugin extends Model
{
    use HasFactory;

    protected $table = 'nits_plugins';

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

}
