import { Component, OnInit } from '@angular/core';
import { QuiService } from '../qui.service';

@Component({
  selector: 'app-qui',
  templateUrl: './qui.component.html',
  styleUrls: ['./qui.component.css']
})
export class QuiComponent implements OnInit {

  constructor( private teammemberService: QuiService ) { }

  ngOnInit(): void {
    this.getteammember()
  }
  team:any ; 
getteammember(){
  this.teammemberService.ourteam().subscribe(res=>{
    this.team=res ; 
    this.team.image="http://localhost:3000/"+res.image.toString().split("\\")[0]+"/"+
    console.log(this.team)
    
 console.log(res)
     })}
}