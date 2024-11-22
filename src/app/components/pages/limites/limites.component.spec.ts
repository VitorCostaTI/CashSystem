import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitesComponent } from './limites.component';

describe('LimitesComponent', () => {
  let component: LimitesComponent;
  let fixture: ComponentFixture<LimitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
