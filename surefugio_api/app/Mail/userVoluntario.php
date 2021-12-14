<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

use App\Models\Animal;
use App\Models\User;
use App\Models\Particular;

class userVoluntario extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $subject = 'Quiero ser voluntario!';

    public $msg;
    public $userParticular;
    public $particular;
    public function __construct(Particular $particular,User $userParticular)
    {
        $this->userParticular = $userParticular;
        $this->particular = $particular;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.user-voluntario');
    }
}
