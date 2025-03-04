import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdarComponent } from './navdar.component';

describe('NavdarComponent', () => {
  let component: NavdarComponent;
  let fixture: ComponentFixture<NavdarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavdarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavdarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
