import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../operators.service';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor(public operatorData: OperatorsService) { }

  ngOnInit() {
  }

}
