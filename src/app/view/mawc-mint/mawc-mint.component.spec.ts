import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MawcMintComponent } from './mawc-mint.component';

describe('MawcMintComponent', () => {
  let component: MawcMintComponent;
  let fixture: ComponentFixture<MawcMintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MawcMintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MawcMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
