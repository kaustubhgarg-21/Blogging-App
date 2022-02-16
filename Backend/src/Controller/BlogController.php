<?php

namespace App\Controller;

use App\Controller\BlogController;

class BlogController extends AppController {

    public function initialize():: void {
        parent:: initialize();

        $this->loadcomponent('Paginator');
        $this->loadcomponent('Flash');
    }

    public function index(){
        $blogs->this->paginator->paginate($this->blogs->find());
    }

    public function view($slug){

        $blog = $this->blogs->findbyslug($slug)->firstorFail();
        $this ->set(compact('blog'));

    }
}