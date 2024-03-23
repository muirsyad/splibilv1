import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitbilComponent } from './splitbil.component';

describe('SplitbilComponent', () => {
  let component: SplitbilComponent;
  let fixture: ComponentFixture<SplitbilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitbilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitbilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
