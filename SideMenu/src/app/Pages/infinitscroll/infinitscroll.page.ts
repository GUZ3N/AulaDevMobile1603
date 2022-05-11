import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitscroll',
  templateUrl: './infinitscroll.page.html',
  styleUrls: ['./infinitscroll.page.scss'],
})
export class InfinitscrollPage implements OnInit {

  alfabetos =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  limite =5;

  

  constructor() { }

  ngOnInit() {
  }

  atualizaInfinite(infiniteScrollEvent: any){
    this.limite += 5;
    infiniteScrollEvent.target.complete();
  }

}
