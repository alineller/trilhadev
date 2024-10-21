import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoViolentaComponent } from './comunicacao-violenta.component';

describe('ComunicacaoViolentaComponent', () => {
  let component: ComunicacaoViolentaComponent;
  let fixture: ComponentFixture<ComunicacaoViolentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoViolentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacaoViolentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
