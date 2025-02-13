import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavdarComponent } from './components/navdar/navdar.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavdarComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apuntes';
}
