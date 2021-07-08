import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-info-item',
  templateUrl: './main-info-item.component.html',
  styleUrls: ['./main-info-item.component.css']
})
export class MainInfoItemComponent implements OnInit {

  @Input()
  infoOne:any

  countControl = new FormControl(0.01,[Validators.required,Validators.min(0.01)])

  myFormGroup: FormGroup = new FormGroup({
    count: this.countControl,
  })

  constructor() { }

  ngOnInit(): void {
  }


  valid() {
    if (this.myFormGroup.valid) {
      console.log(
        {
         count:+this.countControl.value,
          id:this.infoOne.id
        });
      return;
    }
  }
}
