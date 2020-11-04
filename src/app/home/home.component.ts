import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  satellitesInfo: any;
  launchYearFilter:any = [{ flag: false, value: 2006 },
  { flag: false, value: 2007 },
  { flag: false, value: 2008 },
  { flag: false, value: 2009 },
  { flag: false, value: 2010 },
  { flag: false, value: 2011 },
  { flag: false, value: 2012 },
  { flag: false, value: 2013 },
  { flag: false, value: 2014 },
  { flag: false, value: 2015 },
  { flag: false, value: 2016 },
  { flag: false, value: 2017 },
  { flag: false, value: 2018 },
  { flag: false, value: 2019 },
  { flag: false, value: 2020 },
  { flag: false, value: 2021 }
  ];
  sucessfulLaunchFilter:any = [{ flag: false, value: true }, { flag: false, value: false }];
  sucessfulLandFilter:any = [{ flag: false, value: true }, { flag: false, value: false }];
  params: any = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.getSatelliteInfo();
  }
  getSatelliteInfo() {
    this.spacexService.getSatelliteInfo()
      .subscribe(satellites => this.satellitesInfo = satellites);
  }
  onClickMe(filterdata:any, filtertype:any, arrayData:any) {
    let httpparams: any = new HttpParams();
    this.checkflag(arrayData, filterdata);
    if (this.params.length) {
      let flag = false;
      this.params.forEach((element, index) => {
        if (element.filtertype === filtertype) {
          if (element.value === filterdata.value) {
            this.params.splice(index, 1);
          } else {
            element.value = filterdata.value;
          }
          flag = true;
        }
      });
      if (!flag) {
        this.params.push({ filtertype, value: filterdata.value });
      }
    } else {
      this.params.push({ filtertype, value: filterdata.value });
    }

    this.params.forEach(element => {
      httpparams = httpparams.append(element.filtertype, element.value);

    });

    this.spacexService.getSatelliteInfoFiltered(httpparams)
      .subscribe(satellites => this.satellitesInfo = satellites);
  }

  checkflag(arrayData:any, filterdata:any) {
    this[arrayData].forEach(key => {
      if (key.value !== filterdata.value) {
        key.flag = false;
      } else {
        key.flag = !key.flag;
      }

    })
  }
}
