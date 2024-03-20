import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlandingComponent } from './afterlanding.component';

describe('AfterlandingComponent', () => {
  let component: AfterlandingComponent;
  let fixture: ComponentFixture<AfterlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
