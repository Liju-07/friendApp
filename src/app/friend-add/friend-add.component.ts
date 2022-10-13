import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {

  constructor(private api:ApiService) { }


  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""




read=()=>{
  let data={
    
 "name":this.name,
  "friendName":this.friendName,
  "friendNickName":this.friendName,
  "DescribeYourFriend":this.DescribeYourFriend
  }
  this.api.add(data).subscribe(
    (response:any)=>{
      alert("Added Successfully")
    }
  )
}


  ngOnInit(): void {
  }

}
