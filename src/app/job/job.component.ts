import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobInfo } from '../app.component'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  mobile: boolean = false;
  @Input() job: JobInfo = new JobInfo();
  @Output() filter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.mobile = (window.innerWidth <= 768) ? true : false;
  }

  onResize(event: any) {
    this.mobile = (event.target.innerWidth <= 768) ? true : false;
  }

  addFilter(event: any) {
    this.filter.emit(event.target.innerText);
  }
}
