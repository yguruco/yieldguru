<?php

namespace App\Models;

use App\Models\User;
use App\Models\Asset;
use App\Http\Traits\HasHashIds;
use App\Models\Traits\HashIdModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Vinkla\Hashids\Facades\Hashids;

class Pool extends Model
{
    use HasHashIds, HashIdModel, HasFactory;

    protected $fillable = ['name', 'description'];

    protected $appends = ['hash'];

    protected $hidden = ['id'];

    // A pool can have many users and assets
    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function assets() {
        return $this->hasMany(Asset::class);
    }
}
