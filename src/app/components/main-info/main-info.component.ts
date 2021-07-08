import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  info:any[]
  isLoading=false

  namber=0
  namber1=10

  textControl = new FormControl("")

  myFormGroup: FormGroup = new FormGroup({
    text: this.textControl,
  })

  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.testService.getTest().subscribe(value => {
      this.info=value.slice(this.namber,this.namber1)
      console.log(this.info)
    })
    setTimeout(()=>{
      this.isLoading=true
    },8000)
  }


  next(nam1:number,nam:number) {
    this.isLoading=false
    this.namber=this.namber+nam
    this.namber1=this.namber1+nam1
    this.testService.getTest().subscribe(value => {
      this.info=value.slice(this.namber,this.namber1)
      console.log(this.info)
    })
    setTimeout(()=>{
      this.isLoading=true
    },8000)
  }

  back(number: number, number2: number) {
    this.isLoading=false
    this.namber=this.namber-number
    this.namber1=this.namber1-number2
    this.testService.getTest().subscribe(value => {
      this.info=value.slice(this.namber,this.namber1)
      console.log(this.info)
    })
    setTimeout(()=>{
      this.isLoading=true
    },8000)
  }

  search(): void {
    if (this.textControl.value === "") {
      this.testService.getTest().subscribe(value => {
        this.info=value.slice(this.namber,this.namber1)
        console.log(this.info)
      })
    } else {
      this.testService.getTest().subscribe(value => {
        this.info=value
        this.info=this.info.filter((value1 => value1.host.nickName.includes(this.textControl.value)))
        this.info=this.info.slice(this.namber,this.namber1)
      })
    }

  }

  trending() {
    this.isLoading=false
    this.testService.getTest().subscribe(value => {
      this.info=value
      this.info=this.info.sort(((a, b) => b.answerAmount-a.answerAmount))
      this.info=value.slice(this.namber,this.namber1)
      console.log(this.info)
    })
    setTimeout(()=>{
      this.isLoading=true
    },8000)
  }

  controversial() {

  }
  following() {
    this.isLoading=false
    this.testService.getTest().subscribe(value => {
      this.info=value
      this.info=this.info.filter(((a) =>a.finalAnswer !==null))
      this.info=this.info.slice(this.namber,this.namber1)
      console.log(this.info)
    })
    setTimeout(()=>{
      this.isLoading=true
    },8000)
  }
}
