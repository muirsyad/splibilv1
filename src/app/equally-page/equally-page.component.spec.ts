import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquallyPageComponent } from './equally-page.component';

describe('EquallyPageComponent', () => {
  let component: EquallyPageComponent;
  let fixture: ComponentFixture<EquallyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquallyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquallyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
