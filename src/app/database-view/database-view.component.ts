import { Component } from '@angular/core';
import {TableComponent} from '../table/table.component';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-database-view',
    imports: [TableComponent, NgOptimizedImage],
  templateUrl: './database-view.component.html',
  standalone: true,
  styleUrl: './database-view.component.css'
})
export class DatabaseViewComponent {

}
