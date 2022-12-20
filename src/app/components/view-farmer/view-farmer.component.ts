import { Component } from '@angular/core';
import {FarmerService} from './../../services/farmer.service'
import {Router, ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-view-farmer',
  templateUrl: './view-farmer.component.html',
  styleUrls: ['./view-farmer.component.css']
})
export class ViewFarmerComponent {
  id;
  farmer;
  constructor(
    private readonly farmerService: FarmerService,
    private router: Router,
    private route: ActivatedRoute) {
 }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.farmerService.getFarmer(this.id).subscribe(
      (result:any) => {
        console.log('request', result);
        this.farmer = result.data;
      }
    )
  }
}
