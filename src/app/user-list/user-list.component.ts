import { Component, computed, ElementRef, EventEmitter, inject, OnInit, Output, signal, ViewChild, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../modal/user';
import { data } from '../json';


@Component({
  selector: 'app-user-list',
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  
})
export class UserListComponent implements OnInit {
  
  filterText: number = 0;
  users: any[] = [];
  searchText: string = "";
  
  router: Router = inject(Router)
  userService: UserService = inject(UserService)
  // 
  totalUsers: number = 0;
  pageSize: number = 6;
  currentPage: number = 0;
  loading: boolean = false;

//    users = signal<Array<any>>([])
//   searchText = signal<string>("");

//   usersComputed = computed(() => {
//     if (this.searchText) {
//       return this.users().filter(c => c.id)
//     }
//     else{
//       return this.users
//     }
//   })
// }
  onSearchInput(){
    if (this.searchText) {
      return this.users.filter(x => x.id === this.searchText)
      
    }
    else{
      return this.users
    }
  }

  
  ngOnInit(): void {
    this.findAllUsers(this.currentPage + 1);
    
  };
  findAllUsers(page: number): void{
    this.userService.getAllUsers(page).subscribe(response => {
      this.users = response.data;
      this.totalUsers = response.total
      console.log('users', this.users);
    });
  }
  //
  changePage(event: any) {
    this.currentPage = event.pageIndex;
    this.findAllUsers(this.currentPage + 1);
  }
  viewUserDetails(id: number): void {
    this.router.navigate(['/detail', id]);
    // console.log(this.id);
    
  }
  // @Output()
  // SearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  // @ViewChild('searchInput') searchInputEl: ElementRef;
  
  // onSearchTextChange(){
  //   this.SearchTextChange.emit(this.searchText)
  // }
  
  
  // updateSearchText() {
  //   // this.searchText = inputEl.value
  //    this.searchText = this.searchInputEl.nativeElement.value;
  //   this.SearchTextChange.emit(this.searchText);
  // }

}





