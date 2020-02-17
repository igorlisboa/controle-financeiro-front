import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarEntradaSaidaComponent } from './lancar-entrada-saida.component';

describe('LancarEntradaSaidaComponent', () => {
  let component: LancarEntradaSaidaComponent;
  let fixture: ComponentFixture<LancarEntradaSaidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancarEntradaSaidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancarEntradaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
