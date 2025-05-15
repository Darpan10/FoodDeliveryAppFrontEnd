import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueCheckoutComponent } from './dialogue-checkout.component';

describe('DialogueCheckoutComponent', () => {
  let component: DialogueCheckoutComponent;
  let fixture: ComponentFixture<DialogueCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
