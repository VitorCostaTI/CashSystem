import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesDialogComponent } from './movimentacoes-dialog.component';

describe('MovimentacoesDialogComponent', () => {
  let component: MovimentacoesDialogComponent;
  let fixture: ComponentFixture<MovimentacoesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacoesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentacoesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
