import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {TestBed, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { SpacexService } from '../spacex.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spacexService: SpacexService;
  let satellites: any;
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        SpacexService
    ],
    imports: [HttpClientModule, HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spacexService = TestBed.get(SpacexService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


//   it('On init users should be loaded', fakeAsync(() => {
//     spyOn(spacexService, 'getSatelliteInfo').and.returnValue(of([]).pipe(delay(1)));

//     // Trigger ngOnInit()
//     fixture.detectChanges();

    
//     expect(component.satellitesInfo).toBeUndefined();
//     expect(spacexService.getSatelliteInfo).toHaveBeenCalledWith();

//     // Simulates the asynchronous passage of time
//     tick(1);

    
//     expect(component.satellitesInfo).toEqual([satellites]);
// }));

});
