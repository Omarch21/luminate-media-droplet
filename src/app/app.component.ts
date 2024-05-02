import { Component,OnInit,ElementRef,HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from './components/dialog/dialogbox/dialogbox.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showHamburgerMenu: boolean = false;
  title = 'luminate-chicago';
  constructor(private elRef:ElementRef,private dialog: MatDialog,private router: Router){}
  ngOnInit(){
    
    this.checkScreenSize();
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
@HostListener('window:resize',['$event'])
onResize(event:any){
  this.checkScreenSize();
}
checkScreenSize(){
  this.showHamburgerMenu = window.innerWidth < 700;
}
toggleMenu(){
  this.showHamburgerMenu = !this.showHamburgerMenu;
}
checkRt(): boolean{
  
  return this.router.url === '/checklist'
}
openDialog(){

  this.dialog.open(DialogBoxComponent, {
    width: '800px',
    height: '600px',

  })
}
}
