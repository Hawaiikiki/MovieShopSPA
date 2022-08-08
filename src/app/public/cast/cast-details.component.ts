import { Component, OnInit } from '@angular/core';
import { CastService } from 'src/app/core/services/cast.service';
import { CastDetails } from 'src/app/shared/models/CastDetails';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  cast!: CastDetails;
  id!: number;
  constructor(private activateRoute:ActivatedRoute, private castService:CastService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      console.log(params);
      this.id = params['castId'];
      // this.id = params.castId;
      console.log(this.id);

    });
    this.castService.getCastDetails(this.id).subscribe(c=>{
      this.cast = c;
      console.log(this.cast);
    })
  }


}
