import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements AfterViewInit {

  isExpanded: boolean = true;
  ngOnInit() {
    this.initializeDarkMode();
  }
  toggleDarkMode(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const root = document.documentElement;

    if (checkbox.checked) {
      root.classList.add('dark-mode');
      window.localStorage.setItem('mode', 'dark');
    } else {
      root.classList.remove('dark-mode');
      window.localStorage.setItem('mode', 'light');
    }
  }

  initializeDarkMode() {
    const mode = window.localStorage.getItem('mode');
    const checkbox = document.getElementById('theme-mode') as HTMLInputElement;
    const root = document.documentElement;
    console.log(mode);
    if (mode === 'dark') {
      
     checkbox.checked = true;
      root.classList.add('dark-mode');
    } else {
      checkbox.checked = false;
      root.classList.remove('dark-mode');
    }
  }
  ngAfterViewInit(): void {
    const preloader = document.querySelector('.page-loading') as HTMLElement | null;
    
    if (preloader) {
      preloader.classList.remove('active');
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    }
    if (window.innerWidth < 1000) {
      this.isExpanded = false;
    }
    else
    {
      this.isExpanded = true;
    }

  }
  
  toggle() {
    if (window.innerWidth < 1000) {
      this.isExpanded = !this.isExpanded;
    }
  }
  
  handleNavItemClick(event: Event) {
    if(window.innerWidth < 1000)
    {
      this.isExpanded = !this.isExpanded;
    }
  }
}
