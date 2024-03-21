import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStrokeComponent } from './title-stroke.component';

describe('TitleStrokeComponent', () => {
  let component: TitleStrokeComponent;
  let fixture: ComponentFixture<TitleStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleStrokeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
