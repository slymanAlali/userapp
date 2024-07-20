import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = "";

  @Output()
  SearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;
  
  onSearchTextChange(){
    this.SearchTextChange.emit(this.searchText)
  }
  
  
  updateSearchText() {
    // this.searchText = inputEl.value
     this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChange.emit(this.searchText);
  }


}
