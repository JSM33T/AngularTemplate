import { TestBed } from '@angular/core/testing';

import { AlmondcoveapiService } from './almondcoveapi.service';

describe('AlmondcoveapiService', () => {
  let service: AlmondcoveapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmondcoveapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
