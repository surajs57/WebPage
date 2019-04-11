// import { Component, OnInit } from '@angular/core';
import {InterestService} from './interest.service';
import { IInterest } from './interest';
import { OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  interests:any = [];
  constructor(private interestService:InterestService ) {}

  selectedInterest:any = [];

  toggleInterest(interestId){
    if(this.isInterestSelected(interestId)){
      const index = this.selectedInterest.findIndex(index => index === interestId);
      this.selectedInterest.splice(index,1);
    }else{
      this.selectedInterest.push(interestId);
    }
  }

  isInterestSelected(interestId):boolean{
    if(this.selectedInterest.includes(interestId))
      return true;

    return false;
  }

  public ngOnInit(){
    this.interestService.getInterest().subscribe(data=>{
      console.log(data);
      this.interests = data;
      console.log(this.interests);
  });


  }
}
