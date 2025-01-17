import {Component, HostListener} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50;
  }
}
