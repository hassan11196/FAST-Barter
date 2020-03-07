/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPostsService } from './user-posts.service';

describe('Service: UserPosts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPostsService]
    });
  });

  it('should ...', inject([UserPostsService], (service: UserPostsService) => {
    expect(service).toBeTruthy();
  }));
});
