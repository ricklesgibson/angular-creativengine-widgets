import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetForm: FormGroup;
  id = '';
  title = '';
  desc = '';
  price: number = null;
  date: Date = null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getWidget(this.route.snapshot.params.id);
    this.widgetForm = this.formBuilder.group({
      title: [null, Validators.required],
      desc: [null, Validators.required],
      price: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  getWidget(id) {
    this.api.getWidget(id).subscribe(data => {
      this.id = data.id.toString();
      this.widgetForm.setValue({
        title: data.title,
        desc: data.desc,
        price: data.price,
        date: data.date
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateWidget(this.id, form)
      .subscribe(res => {
        /* tslint:disable:no-string-literal */
        const id = res['id'];
        /* tslint:enable:no-string-literal */
        this.isLoadingResults = false;
        this.router.navigate(['/widget-info', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  widgetInfo() {
    this.router.navigate(['/widget-info', this.id]);
  }

}
