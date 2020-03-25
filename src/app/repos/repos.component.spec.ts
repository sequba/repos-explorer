import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { ReposStoreService } from './repos-store/repos-store.service';
import { of } from 'rxjs';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;
  let reposStoreMock: ReposStoreService;

  beforeEach(() => {
    reposStoreMock = {
      getNonForkReposByUser$: () => of(['repo1', 'repo2'])
    } as any;
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReposComponent],
      providers: [{provide: ReposStoreService, useValue: reposStoreMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showRepos', () => {
    it('should call ReposStoreService.getNonForkReposByUser$', () => {
      const getReposSpy = spyOn(reposStoreMock, 'getNonForkReposByUser$').and.callThrough();
      component.showRepos('username');
      expect(getReposSpy).toHaveBeenCalled();
    });
  });
});
