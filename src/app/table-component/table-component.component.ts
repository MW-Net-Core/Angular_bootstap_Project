import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  constructor() { }

  result: string = "SomeName here";



  TH_HEROS: any = [
    { TH_ID: 'id', TH_NAME: 'Name', TH_AGE: 'Age', TH_EDIT: 'Edit', TH_DELETE: 'Delete'}
  ];

  TD_HEROS : any = [
    {id: 1, name:'Superman', age: 10},
    {id: 2, name:'Batman', age: 20},
    {id: 5, name:'BatGirl', age: 30},
    {id: 3, name:'Robin', age: 40},
    {id: 4, name:'Flash', age: 50}
  ];

  

  










  ngOnInit(): void {
  }

}
