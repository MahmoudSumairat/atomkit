import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  routes = [
    { title: 'about us', link: '/aboutUs' },
    { title: 'our magazine', link: '/magazine' },
    { title: 'multimedia', link: '/multimedia' },
    { title: 'community', link: '/community' },
    {
      title: 'service',
      link: '/services',
    },
    {
      title: 'contact us',
      link: '/contactUs',
    },
  ];

  ngOnInit(): void {}
}
