<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'value', 'pool_id'];

    // An asset belongs to a pool
    public function pool() {
        return $this->belongsTo(Pool::class);
    }
}
