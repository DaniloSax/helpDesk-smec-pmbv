<?php

namespace App\Observers;

use App\Models\Call;

class CallObserver
{
    /**
     * Handle the call "created" event.
     *
     * @param  \App\Call  $call
     * @return void
     */
    public function created(Call $call)
    {
        $call->created_by = auth()->user()->id;
        $call->save();
    }

    /**
     * Handle the call "updated" event.
     *
     * @param  \App\Call  $call
     * @return void
     */
    public function updated(Call $call)
    {
        $call->updated_by = auth()->user()->id;
    }

    /**
     * Handle the call "deleted" event.
     *
     * @param  \App\Call  $call
     * @return void
     */
    public function deleted(Call $call)
    {
        //
    }

    /**
     * Handle the call "restored" event.
     *
     * @param  \App\Call  $call
     * @return void
     */
    public function restored(Call $call)
    {
        //
    }

    /**
     * Handle the call "force deleted" event.
     *
     * @param  \App\Call  $call
     * @return void
     */
    public function forceDeleted(Call $call)
    {
        //
    }
}
