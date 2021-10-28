import { Component } from '@angular/core';
import data from '../data.json';

export class JobInfo {
  id: number = 0;
  company: string = "";
  logo: string = "";
  new: boolean = false;
  featured: boolean = false;
  position: string = "";
  role: string = "";
  level: string = "";
  postedAt: string = "";
  contract: string = "";
  location: string = "";
  languages: string[] = [];
  tools: string[] = [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'static-job-listings';
  jobs: JobInfo[] = [];
  filters: string[] = [];

  constructor() {}

  ngOnInit() {
    for (let element of data) {
      let job = new JobInfo();
      job.id = element.id;
      job.company = element.company;
      job.logo = element.logo;
      job.new = element.new;
      job.featured = element.featured;
      job.position = element.position;
      job.role = element.role;
      job.level = element.level;
      job.postedAt = element.postedAt;
      job.contract = element.contract;
      job.location = element.location;
      job.languages = element.languages;
      job.tools = element.tools;
      this.jobs.push(job);
    }
  }

  addFilter(event: any) {
    if (!this.filters.includes(event)) {
      this.filters.push(event);
    }
  }

  removeFilter(event: any) {
    this.filters = this.filters.filter(function(value, index, arr){
      return value !== event;
    });
  }

  clearFilter(event: any) {
    this.filters = [];
  }

  getFilteredJobs(): JobInfo[] {
    if (this.filters.length === 0) {
      return this.jobs;
    }
    let filteredJobs = [];
    for (let job of this.jobs) {
      let passFilters = true;
      for (let filter of this.filters) {
        if (!(job.role === filter || job.level === filter || job.languages.includes(filter) || job.tools.includes(filter))) {
          passFilters = false;
        }
      }
      if (passFilters) {
        filteredJobs.push(job);
      }
    }
    return filteredJobs;
  }
}
