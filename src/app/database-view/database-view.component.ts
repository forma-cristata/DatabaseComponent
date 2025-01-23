import { Component } from '@angular/core';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-database-view',
  imports: [TableComponent],
  templateUrl: './database-view.component.html',
  standalone: true,
  styleUrl: './database-view.component.css'
})
export class DatabaseViewComponent {

}
