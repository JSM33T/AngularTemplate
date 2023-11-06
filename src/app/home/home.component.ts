import { Component, ElementRef, AfterViewInit,Renderer2 } from '@angular/core';
import Parallax from 'parallax-js';
import { ChangeDetectorRef } from '@angular/core';
import { AlmondcoveapiService } from '../services/almondcoveapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  inputValue: string = '';
  constructor(private el: ElementRef,private renderer: Renderer2,private apiService: AlmondcoveapiService,private changeDetectorRef: ChangeDetectorRef){}
  btnText:string = "Submit";
  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.parallax');
    
    elements.forEach((element: any) => {
      new Parallax(element);
    });
   }

   postDataToAPI() {
    this.btnText = "loading...";
    this.changeDetectorRef.detectChanges();
    const data = { 
    EMailId:this.inputValue,
    Origin:"jsm33t.in"
    };
    this.apiService.postData(data).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        alert("Email Submitted");
        this.btnText = "Submit";
        this.changeDetectorRef.detectChanges();

      },
      (error) => {
        console.error('Error posting data:', error);
        alert("something went wrong");
        this.btnText = "Submit";

        this.changeDetectorRef.detectChanges();
      }
    );
  }
 


}
