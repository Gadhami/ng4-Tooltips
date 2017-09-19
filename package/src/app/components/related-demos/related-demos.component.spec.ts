import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedDemosComponent } from './related-demos.component';

describe('RelatedDemosComponent', () => {
  let component: RelatedDemosComponent;
  let fixture: ComponentFixture<RelatedDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
