import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Time } from '@angular/common';

interface KeyValuePair {
  time: number,
  value: string;
}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
// list2:KeyValuePair;

time2:Time;
val:string;
min:number;
tot:number;

list: KeyValuePair[] = [
];


  constructor() { }

  ngOnInit(): void {
  }

addTask(){
console.log(this.time2);
console.log(this.val);
let split = this.time2.toString().split(':');
    let hours = split[0];
    let minutes = split[1];
  this.min= (parseInt(hours) * 60 + parseInt(minutes))
this.list.push({time:this.min,value:this.val});
}

  
}

