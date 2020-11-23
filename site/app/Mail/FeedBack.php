<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FeedBack extends Mailable
{
    use Queueable, SerializesModels;

    public $name, $message, $subject;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $message, $subject)
    {
        $this->name = $name;
        $this->message = $message;
        $this->subject = $subject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.orders.feed-back');
    }
}
