import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.css']
})

export class PasswordViewComponent {
  @Input() inputValue: number;
  @Output() sendValue: EventEmitter<number> = new EventEmitter<number>();

  message: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.$observableWay.subscribe(value => this.message = value);
  }

  onClick() {
    this.sendValue.emit(this.inputValue * 2);
  }
}