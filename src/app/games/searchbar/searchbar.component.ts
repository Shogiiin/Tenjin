import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GameItem } from '../gameItem';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  @Input() games :GameItem[] = [];
  options :string[] = [];

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    // for(let i = 0; i < this.games.length; i++) {
    //   this.options.push(this.games[i].name)
    // }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
