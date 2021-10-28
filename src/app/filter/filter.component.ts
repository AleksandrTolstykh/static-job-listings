import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filters: string[] = [];
  @Output() clear: EventEmitter<boolean> = new EventEmitter();
  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeFilter(event: any) {
    this.remove.emit(event.target.name);
  }

  clearFilter(event: any) {
    this.clear.emit(true);
  }
}
