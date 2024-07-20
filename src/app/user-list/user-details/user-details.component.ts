import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { User } from '../../modal/user';
import { subscribe } from 'diagnostics_channel';
import { UserListService } from '../../services/user-list.service';
import { log } from 'console';
// import { User } from '../../modal/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: any
  id: any;
  data: any = {};
  
  constructor(
    private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router,
    private userList: UserListService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUser(userId).subscribe(response => {
        this.user = response.data;
      });
    });
  }
    
  

  findUser(){
    // this.userService.getUser().subscribe()
  }
      
  

}
