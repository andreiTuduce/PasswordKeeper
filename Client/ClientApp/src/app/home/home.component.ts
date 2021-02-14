import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isEnabled = false;
  inputValue = 2;
  message: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.$observableWay.subscribe(value => this.message = value);
  }

  onSendValue(value: number) {
    this.inputValue = value;
  }
}