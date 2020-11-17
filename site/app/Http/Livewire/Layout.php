<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Layout extends Component
{

    public $name = 'variavel criada no component';

    public function render()
    {
        return view('livewire.layout');
    }
}
