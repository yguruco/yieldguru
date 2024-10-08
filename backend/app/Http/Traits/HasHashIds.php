<?php

namespace App\Http\Traits;

use App\Models\BookmarkCollection;
use App\Models\LearningLesson;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Vinkla\Hashids\Facades\Hashids;

trait HasHashIds
{
    /**
     * Get Model by hashed key.
     */
    public function scopeByHash(Builder $query, ?string $hash): Builder
    {
        return $query->where('id', Hashids::connection(static::class)->decode($hash));
    }

    /**
     * Get Model by hashed key.
     */
    public function scopeWhereHashIn(Builder $query, array $hashes = []): Builder
    {
        return $query->whereIn('id', collect($hashes)->map(fn ($hash) => Hashids::connection(static::class)->decode($hash)));
    }

    
    public static function byHash($hash): ?self
    {
        return self::query()->byHash($hash)->first();
    }

    /**
     * Get Model by hash.
     */
    public static function whereHashIn(array $hashes): Collection
    {
        return self::query()->whereHashIn($hashes)->get();
    }

    public static function byHashOrFail($hash): self
    {
        return self::query()->byHash($hash)->firstOrFail();
    }

    public function getRouteKey(): string
    {
        return Hashids::connection(get_called_class())->encode($this->getKey());
    }
}
