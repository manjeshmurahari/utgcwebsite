import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainslideimages',
  templateUrl: './mainslideimages.component.html',
  styleUrls: ['./mainslideimages.component.css']
})
export class MainslideimagesComponent {
  constructor(private router:Router){}
  aboutus(){
    this.router.navigate(['/aboutus'])
    // window.scrollTo(0,0);
  }
}
