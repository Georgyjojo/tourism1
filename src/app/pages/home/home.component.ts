import { Component } from '@angular/core';
import { NavComponent } from "../../ui/nav/nav.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: true,
    autoplay: true,          // Enables autoplay
    autoplayTimeout: 3000,   // Time in milliseconds between each slide change
    autoplayHoverPause: true
  }
  
    slidesStore = [
      {
        id: '1', // Make sure id is a string
        src: 'https://s3-cdn.tripfuser.com/blog/wp-content/uploads/2017/03/19055429/simon-english-48nerZQCHgo-unsplash-2-scaled.jpg',
        alt: 'Image 1 description',
        title: 'Slide 1 Title',
        description: 'This is the description for the first slide.'
      },
      {
        id: '2', // Make sure id is a string
        src: 'https://wallpaperaccess.com/full/1546380.jpg',
        alt: 'Image 2 description',
        title: 'Slide 2 Title',
        description: 'This is the description for the second slide.'
      },
      {
        id: '3', // Make sure id is a string
        src: 'https://www.tusktravel.com/blog/wp-content/uploads/2022/01/Arunachal-Pradesh-Trekking.jpg',
        alt: 'Image 3 description',
        title: 'Slide 3 Title',
        description: 'This is the description for the third slide.'
      }
    ];
  
    
  }



