import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../modal/user';
import { UserService } from '../services/user.service';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-signals',
  
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  counter = signal(0);

  incrementValue() : void{
    this.counter.set(this.counter() + 1 );
  }
   userService: UserService = inject(UserService);
  userList: UserListService = inject(UserListService)

  users: any[] = [];

  // ngOnInit(): void{
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.userService.getAllUsers().subscribe(user => {
  //     this.users = this.users.sort((a: any ,b: any) => a.id - b.id)
  //     console.log('users', this.users);
    
        
        
  //     })
      
  //   }
  }

