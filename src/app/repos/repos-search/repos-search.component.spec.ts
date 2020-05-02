import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposSearchComponent } from './repos-search.component';

describe('ReposSearchComponent', () => {
  let component: ReposSearchComponent;
  let fixture: ComponentFixture<ReposSearchComponent>;
  let input: HTMLInputElement;
  let button: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposSearchComponent);
    component = fixture.componentInstance;
    input = fixture.nativeElement.querySelector('input');
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on button click', () => {
    it('should emit the input value if it is not empty', (done) => {
      component.username.subscribe((emitted: string | null) => {
        expect(emitted).toEqual('superuser');
        done();
      });

      input.value = 'superuser';
      button.click();
      fixture.detectChanges();
    });

    it('should display validation message if input value is empty', () => {
      button.click();
      fixture.detectChanges();

      const validationMessage: HTMLElement = fixture.nativeElement.querySelector('.validation_message');
      expect(validationMessage.textContent?.trim()).toEqual('Username cannot be empty');
    });
  });
});
