import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit, AfterViewInit{

  constructor(private http: HttpClient,private el: ElementRef,private renderer: Renderer2) {}

  ngAfterViewInit(): void {
   // this.initCarousel();
   this.initAos();
  }


  private initAos() {
    var animationToggle = document.querySelector('[data-aos]');
    if (animationToggle === null) return;
    Aos.init();
  }
  jsonData: any[] = [];

 

  ngOnInit(): void {
    this.http.get('./assets/stack.json').subscribe((data: any) => {
      this.jsonData = data;
    });
  }
  
}
