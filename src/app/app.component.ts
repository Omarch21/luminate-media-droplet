import { Component,OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'luminate-chicago';
  constructor(private elRef:ElementRef){}
  ngOnInit(){
 const hiddenEl = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
  })
  hiddenEl.forEach((el)=>observer.observe(el));
}
}
