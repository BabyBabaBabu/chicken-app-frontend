import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Buyers } from '../core/models/buyers';
import { BuyersService } from '../core/services/buyers.service';

@Component({
  selector: 'app-buyer-info',
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.css']
})
export class BuyerInfoComponent implements OnInit {

  buyerId!: number;
  buyer!: Buyers;
  errorMessage!: string;

  constructor(private route: ActivatedRoute, private buyerService: BuyersService, private router: Router) { }

  ngOnInit(): void {
    // let bid = this.route.snapshot.paramMap.get('id');
    // this.buyerId = Number(bid);
    this.getId();


  }

  getId(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.buyerId = parseInt(`${id}`);
      this.getBuyerInfo();
    });
  }

  getBuyerInfo(){
    this.buyerService.getBuyer(this.buyerId).subscribe(
      data => this.buyer = data, (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
      }
    );
  }

  getPrevious(){
    let nextId: number;
    if (this.buyerId == 1) {
      nextId = this.buyerId;
    } else {
      nextId = this.buyerId - 1;
    }
    this.router.navigate(['../', nextId],{relativeTo:this.route});
  }

  getNext(){
    let nextId = this.buyerId + 1;
    this.router.navigate(['../', nextId],{relativeTo:this.route});
  }

  goToBuyersList(){
    let selectedBuyer = this.buyerId ? this.buyerId: null;
    this.router.navigate(['../', {id: selectedBuyer}], {relativeTo:this.route});
  }

  goToOrders(){
    this.router.navigate(['orders'],{relativeTo:this.route});

  }

}
