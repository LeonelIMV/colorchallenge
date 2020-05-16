import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCopiadoComponent } from './color-copiado.component';

describe('ColorCopiadoComponent', () => {
  let component: ColorCopiadoComponent;
  let fixture: ComponentFixture<ColorCopiadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCopiadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCopiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
