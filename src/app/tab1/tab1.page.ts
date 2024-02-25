import { NgForOf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { SwiperContainer as SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions as SwiperConfig } from 'swiper/types';

import { SwiperDirective } from 'src/app/directive/swiper/swiper.directive';

interface Slides {
  id: string;
  title: string;
  src: string;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, SwiperDirective, NgForOf, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab1Page {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  public slides: Slides[] = [
    { id: '1', title: 'slide 1', src: 'https://loremflickr.com/320/240/paris?random=1'},
    { id: '2', title: 'slide 2', src: 'https://loremflickr.com/320/240/paris?random=2'},
    { id: '3', title: 'slide 3', src: 'https://loremflickr.com/320/240/paris?random=3'},
    { id: '4', title: 'slide 4', src: 'https://loremflickr.com/320/240/paris?random=4'},
    { id: '5', title: 'slide 5', src: 'https://loremflickr.com/320/240/paris?random=5'},
    { id: '6', title: 'slide 5', src: 'https://loremflickr.com/320/240/paris?random=6'},
    { id: '7', title: 'slide 5', src: 'https://loremflickr.com/320/240/paris?random=7'},
    { id: '8', title: 'slide 5', src: 'https://loremflickr.com/320/240/paris?random=8'},
  ];

  public swiperConfig: SwiperConfig = {
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 6
    },
    effect: "cards",
    grabCursor: true,
  };

  constructor() {}

  public trackById(index: number, item: Slides): string | number {
    return item ? item.id : index;
  }
}
