import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchText: string = '';

  setSeacrhText(event: any){
    this.searchText = event;
  }

  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  navigateToCourses(){
    //  this.router.navigate(['courses'], {relativeTo: this.activeRoute});
    this.router.navigateByUrl('/courses')
  }

}
