import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Widget} from '../widget';

@Component({
  selector: 'app-widget-info',
  templateUrl: './widget-info.component.html',
  styleUrls: ['./widget-info.component.css']
})
export class WidgetInfoComponent implements OnInit {
  widget: Widget = {id: 0, date: new Date(), price: 0, title: '', desc: ''};
  isLoadingResults = true;

  getWidgetInfo(id) {
    this.api.getWidget(id)
      .subscribe(data => {
        this.widget = data;
        console.log(this.widget);
        this.isLoadingResults = false;
      });
  }

  deleteWidget(id) {
    this.isLoadingResults = true;
    this.api.deleteWidget(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/widgets']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getWidgetInfo(this.route.snapshot.params['id']);
  }

}
