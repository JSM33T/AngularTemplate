import { Component, ElementRef, AfterViewInit,Renderer2 } from '@angular/core';
import Parallax from 'parallax-js';
import Aos from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef,private renderer: Renderer2){}

  ngAfterViewInit(): void {
    // this.initCarousel();
    const elements = this.el.nativeElement.querySelectorAll('.parallax');

    // Initiate Parallax for each element
    elements.forEach((element: any) => {
      new Parallax(element);
    });
    this.initSmoothScroll();
   }
 
 
   private initSmoothScroll() {
     var animationToggle = document.querySelector('[data-aos]');
     if (animationToggle === null) return;
     Aos.init();
   }

}
