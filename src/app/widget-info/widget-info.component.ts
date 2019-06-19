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
  widget: Widget = {id: null, date: null, price: null, title: '', desc: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    console.log('The ngOnInit for widget-info component');
    /* tslint:disable:no-string-literal */
    this.getWidgetInfo(this.route.snapshot.params['id']);
    /* tslint:enable:no-string-literal */
  }


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

}
