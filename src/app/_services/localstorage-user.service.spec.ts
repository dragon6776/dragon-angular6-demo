import { TestBed } from '@angular/core/testing';

import { LocalstorageUserService } from './localstorage-user.service';

describe('LocalstorageUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageUserService = TestBed.get(LocalstorageUserService);
    expect(service).toBeTruthy();
  });
});
