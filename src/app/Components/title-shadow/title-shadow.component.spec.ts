import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleShadowComponent } from './title-shadow.component';

describe('TitleShadowComponent', () => {
  let component: TitleShadowComponent;
  let fixture: ComponentFixture<TitleShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleShadowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
