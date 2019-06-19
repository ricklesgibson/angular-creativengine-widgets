import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Widget} from '../widget';


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'desc'];
  data: Widget[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getWidgets()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}

