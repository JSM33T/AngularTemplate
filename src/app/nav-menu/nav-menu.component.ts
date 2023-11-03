import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements AfterViewInit {
  ngOnInit() {
    // Initialize dark mode based on local storage or any other logic
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
    // Check local storage or other logic to set initial state
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
  }
  isExpanded: boolean = false;
  isCollapsed: boolean = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
