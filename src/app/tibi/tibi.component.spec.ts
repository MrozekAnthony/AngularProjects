import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiComponent } from './tibi.component';

describe('TibiComponent', () => {
  let component: TibiComponent;
  let fixture: ComponentFixture<TibiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TibiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
