import { TestBed, inject } from '@angular/core/testing';

import { GetPostsService } from './get-posts.service';

describe('GetPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPostsService]
    });
  });

  it('should ...', inject([GetPostsService], (service: GetPostsService) => {
    expect(service).toBeTruthy();
  }));
});
