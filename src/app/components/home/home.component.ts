import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  url: string = 'https://storage.googleapis.com/luminate_media_bucket_1/Horizontal%20Landing.mov';
  loading: boolean = true;
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

  const hiddenEl2 = document.querySelectorAll('.hidden-2');
   const observer2 = new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
       console.log(entry)
       if(entry.isIntersecting){
         entry.target.classList.add('show');
       }else{
         entry.target.classList.remove('show');
       }
     })
   })
   hiddenEl2.forEach((el)=>observer2.observe(el));
}
load(){
  this.loading = false
}
}
