import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule , HttpClientModule ], 
        providers: [SpacexService]
  }));

  it('should be created', () => {
    const service: SpacexService = TestBed.get(SpacexService);
    expect(service).toBeTruthy();
  });

  it('should have getSatelliteInfo function', () => {
    const service: SpacexService = TestBed.get(SpacexService);
    expect(service.getSatelliteInfo).toBeTruthy();
   });

   it('should have getSatelliteInfoFiltered function', () => {
    const service: SpacexService = TestBed.get(SpacexService);
    expect(service.getSatelliteInfoFiltered).toBeTruthy();
   });
});
