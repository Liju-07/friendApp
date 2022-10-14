import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.css']
})
export class FriendViewComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetch()
   }
status:boolean=false
fetch=()=>{
  this.api.view().subscribe(
    (data)=>this.Data=data
  
  )
  this.status=true
}


  ngOnInit(): void {
  }



Data:any=[]
}
