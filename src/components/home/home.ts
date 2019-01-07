import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../../app/services/kitchen.service';
declare var $: any;
/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

  text: string;

  kitchens: any;
  isFetching: boolean = false;

  constructor(
    public kitchenService: KitchenService
  ) { }

  ngOnInit() {
    this.isFetching= true;
    this.kitchenService.getAllKitchen().subscribe((data)=>{
      this.isFetching= false;
      if(data && data.length) {
        this.kitchens = data;
      } else {

      }
    })
  }

}
