import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
  standalone: true
})
export class SwiperDirective implements AfterViewInit {
  @Input() config?: SwiperOptions

  constructor(
    private el: ElementRef<SwiperContainer>
  ) { }

  ngAfterViewInit() {
    // console.log('SwiperDirective', this.config, this.el.nativeElement);

    Object.assign(this.el.nativeElement, this.config);

    this.el.nativeElement.initialize();
  }
}
