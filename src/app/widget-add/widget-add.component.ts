import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-widget-add',
  templateUrl: './widget-add.component.html',
  styleUrls: ['./widget-add.component.css']
})
export class WidgetAddComponent implements OnInit {
  widgetForm: FormGroup;
  title = '';
  desc = '';
  price: number = null;
  date: Date = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.widgetForm = this.formBuilder.group({
      title: [null, Validators.required],
      desc: [null, Validators.required],
      price: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addWidget(form)
      .subscribe(res => {
        /* tslint:disable:no-string-literal */
        const id = res['id'];
        /* tslint:enable:no-string-literal */
        this.isLoadingResults = false;
        this.router.navigate(['.widget-info', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
