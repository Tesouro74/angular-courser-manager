import { Component, OnInit } from "@angular/core";
import {Course} from './course';

@Component({
  selector:'app-course-list',
  templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit { 
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [{
      id: 1,
      name: 'Angular 8',
      imageUrl:'/assets/images/forms.png',
      price: 99.99,
      code: 'xps-5477',
      duration: 120,
      rating: 5.4,
      realeaseDate: 'December, 4, 2020'
    },{
      id: 2,
      name: 'JavaScript',
      imageUrl:'/assets/images/forms.png',
      price: 59.99,
      code: 'xps-8798',
      duration: 120,
      rating: 6.4,
      realeaseDate: 'April, 17, 2020'
    }
    ]
  }
}