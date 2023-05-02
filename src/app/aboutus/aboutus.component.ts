import { Component,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UtgcearlydaysComponent } from '../utgcearlydays/utgcearlydays.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { Router,NavigationEnd } from '@angular/router';
import { Utgc2006Component } from '../utgc2006/utgc2006.component';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  

  constructor(public dialog: MatDialog,private router:Router) {}

  ngOnInit()
  {
   this.router.events.subscribe((event)=>{
    if(!(event instanceof NavigationEnd)){
      return;
    }
    window.scrollTo(0,0);
   })
  }

  openDialog() {
    const dialogRef = this.dialog.open(UtgcearlydaysComponent,{width: '79%',
    height: '58%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openwomanFellowShipDialog() {
    const dialogRef = this.dialog.open(ActivitiesComponent,{
      width: '100%',
      height: '100%' 
      
   
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  after2006() {
    const dialogRef = this.dialog.open(Utgc2006Component,{width: '79%',
    height: '78%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}