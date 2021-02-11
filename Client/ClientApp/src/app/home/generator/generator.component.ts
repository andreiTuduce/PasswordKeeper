import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  onClick(stringValue: string) {
    this.homeService.sentViaService(stringValue);
  }

}