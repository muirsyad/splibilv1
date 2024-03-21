import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStaticComponent } from './individual-static.component';

describe('IndividualStaticComponent', () => {
  let component: IndividualStaticComponent;
  let fixture: ComponentFixture<IndividualStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
