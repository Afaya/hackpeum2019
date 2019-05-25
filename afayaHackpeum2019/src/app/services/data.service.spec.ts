import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('data should be returned', () => {
    const service: DataService = TestBed.get(DataService);
    const dataFromJson = service.getDataFilmFromJSON();
    expect(dataFromJson.length).toBeGreaterThan(0);
  });
});
