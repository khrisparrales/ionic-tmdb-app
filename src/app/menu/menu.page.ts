import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Explore',
      url: '/menu/explore/movies',
      icon: 'film'
    },
    {
      title: 'My Watchlist',
      url: '/menu/list/movies',
      icon: 'time'
    },
    {
      title: 'My collections',
      url: '/menu/collections/bluray',
      icon: 'disc'
    }
  ];

  selectedPath = '';
  constructor(private _router: Router) {
    this._router.events.subscribe(
      (event: RouterEvent) => this.selectedPath = event.url
    );
   }

  ngOnInit() {
  }
}
