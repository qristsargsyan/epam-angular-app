import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal.service';
import { FlowerService } from './flower.service';

@Component({
  selector: 'app-providers-viewproviders',
  templateUrl: './providers-viewproviders.component.html',
  styleUrls: ['./providers-viewproviders.component.css']
})
export class ProvidersViewprovidersComponent implements OnInit {

  constructor(public flower: FlowerService, public animal: AnimalService) { }

  ngOnInit(): void {
  }

}
