/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostCrudService } from './post-crud.service';

describe('Service: PostCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCrudService]
    });
  });

  it('should ...', inject([PostCrudService], (service: PostCrudService) => {
    expect(service).toBeTruthy();
  }));
});
