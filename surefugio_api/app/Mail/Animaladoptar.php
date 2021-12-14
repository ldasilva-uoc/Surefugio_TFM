<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

use App\Models\Animal;
use App\Models\User;
use App\Models\Particular;

class Animaladoptar extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $subject = 'Quiero adoptar!';

    public $msg;
    public $userParticular;
    public $animal;
    public $particular;
    public function __construct(Particular $particular,User $userParticular,Animal $animal)
    {
        $this->userParticular = $userParticular;
        $this->animal = $animal;
        $this->particular = $particular;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.animal-adoptar');
    }
}
