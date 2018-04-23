import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySharedComponent } from './company-shared.component';

describe('CompanySharedComponent', () => {
  let component: CompanySharedComponent;
  let fixture: ComponentFixture<CompanySharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
