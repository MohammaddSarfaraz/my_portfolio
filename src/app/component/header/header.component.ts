import { viewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router , private renderer: Renderer2) { }
  private offcanvas: Offcanvas;
  @ViewChild('check') element:ElementRef;

  isopen: boolean = false;
  open(){
    const modalElement = document.getElementById('offcanvasTop');
    modalElement.classList.add('show');
    this.isopen=true;
  }
  close(){
    const modalElement = document.getElementById('offcanvasTop');
    modalElement.classList.remove('show');
    this.isopen=false;
  }
  ngOnInit(): void {}

  redirectTo(getID: string) {
    const getElementById = document.getElementById(getID);
    if(!!getElementById){
      getElementById.scrollIntoView({behavior:'smooth',block:'start'});
    }
    this.close();
  }
}
