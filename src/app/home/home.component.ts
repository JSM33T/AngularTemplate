import { Component, ElementRef, AfterViewInit,Renderer2 } from '@angular/core';
import Parallax from 'parallax-js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef,private renderer: Renderer2){}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.parallax');
    
    elements.forEach((element: any) => {
      new Parallax(element);
    });
   }
 


}
