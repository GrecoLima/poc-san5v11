import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEsgotamentoComponent } from './tipo-esgotamento.component';

describe('TipoEsgotamentoComponent', () => {
  let component: TipoEsgotamentoComponent;
  let fixture: ComponentFixture<TipoEsgotamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEsgotamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEsgotamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
