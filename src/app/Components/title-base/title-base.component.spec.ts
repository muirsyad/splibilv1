import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBaseComponent } from './title-base.component';

describe('TitleBaseComponent', () => {
  let component: TitleBaseComponent;
  let fixture: ComponentFixture<TitleBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
