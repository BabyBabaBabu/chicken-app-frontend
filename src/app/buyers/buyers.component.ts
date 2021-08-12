import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../core/services/buyers.service';
import { Buyers } from '../core/models/buyers';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  mybuyers: Buyers[] = [];
  selectedBuyer?: Buyers;
  buyerId!: Number;
  errorMessage="";
  constructor( private buyerService: BuyersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buyerService.getBuyers()
      .subscribe(data => this.mybuyers = data,
        (error: HttpErrorResponse) => {
          this.errorMessage = error.message;
        }
        );

        this.route.paramMap.subscribe((params: ParamMap) => {
          let id = params.get('id');
          this.buyerId = parseInt(`${id}`);
        });
  }

  onSelect(buyer: Buyers): void{
    this.selectedBuyer = buyer;
    this.router.navigate(['/buyers', this.selectedBuyer.id]);
  }

  isSelected(buyer: Buyers){
    return buyer.id === this.buyerId;
  }

}
