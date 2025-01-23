import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableComponent} from './table/table.component';
import {DatabaseViewComponent} from './database-view/database-view.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TableComponent,
    DatabaseViewComponent,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DatabaseComponent';
}
