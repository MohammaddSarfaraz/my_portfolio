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
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}
  private offcanvas: Offcanvas;
  @ViewChild('check') element: ElementRef;

  isopen: boolean = false;
  open() {
    const modalElement = document.getElementById('openoffcanvas');
    if (modalElement) {
      modalElement.click();
    }
    this.isopen = true;
  }
  close() {
    const modalElement = document.getElementById('closeoffcanvas');
    if (modalElement) {
      modalElement.click();
    }
    this.isopen = false;
  }

  closedByBackdrop = false;
  ngAfterViewInit() {
    const offcanvasElement = document.getElementById('offcanvasStart');
    
    if (offcanvasElement) {
      document.body.addEventListener('click', (event: MouseEvent) => {
        if (this.isopen && event.target && (event.target as HTMLElement).classList.contains('offcanvas-backdrop')) {
          this.closedByBackdrop = true;
          this.isopen = false;
        }
      });

      // Listen to hide.bs.offcanvas event
      offcanvasElement.addEventListener('hide.bs.offcanvas', (event: Event) => {
        if (this.closedByBackdrop) {
          this.closedByBackdrop = false;
          this.isopen = false;
        }
      });
    }
  }

  ngOnInit(): void {}

  redirectTo(getID: string) {
    const getElementById = document.getElementById(getID);
    if (!!getElementById) {
      const elementRect = getElementById.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;

      // Scroll to the position of the element with the header offset
      window.scrollTo({
        top: elementTop - 100,
        behavior: 'smooth',
      });
    }
    this.close();
  }
}
