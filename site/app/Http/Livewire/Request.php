<?php

namespace App\Http\Livewire;

use App\Mail\FeedBack;
use Illuminate\Support\Facades\Mail;
use Livewire\Component;

class Request extends Component
{

    public $name, $text, $subject;
    public $send = 0;


    protected $rules = [
        'text' => 'required|min:6',
        'subject' => 'required',
    ];

    protected $validationAttributes = [
        'text' => 'mensagem',
        'subject' => 'assunto',
    ];

    public function submit()
    {

        $this->validate();

        $froms = [
            'danilovsdanilo@gmail.com',
            'pontoeletronicosisgep@gmail.com',
        ];

        
        Mail::to($froms)->send(new FeedBack($this->name, $this->text, $this->subject));
        $this->send ++;
    }

    public function resetPropres()
    {
       
        $this->reset($this->send);
    }

    public function render()
    {
        return view('livewire.request');
    }
}
