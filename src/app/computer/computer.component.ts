import {Component, OnInit} from '@angular/core';
import {COMPUTERS} from './mockComputer';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  listComputer = COMPUTERS;

  constructor() {
  }

  ngOnInit() {
  }

}
