import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserListComponent } from './user-list/user-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals/signals.component';
import { FilterPipe } from './pipes/filter.pipe';



const routes: Routes = [
    {path: '', component: HomeComponent},
    
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UserListComponent},
    {path: 'users/details/:id', component: UserDetailsComponent},

    
]
@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent,
        
        HomeComponent,
        FilterPipe,
    
        
        
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsComponent,
        RouterModule.forRoot(routes),
        MatCardModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        

        
        
        
    ]
})
export class AppModule {}
