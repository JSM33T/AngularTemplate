import { Component,OnInit ,ElementRef,Renderer2 ,AfterViewInit } from '@angular/core';
import Aos from 'aos';
import Swiper from 'swiper';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements AfterViewInit{
  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngAfterViewInit(): void {
   // this.initCarousel();
   this.initSmoothScroll();
  }


  private initSmoothScroll() {
    var animationToggle = document.querySelector('[data-aos]');
    if (animationToggle === null) return;
    Aos.init();
  }
}
