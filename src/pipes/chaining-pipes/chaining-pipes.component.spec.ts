import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingPipesComponent } from './chaining-pipes.component';

describe('ChainingPipesComponent', () => {
  let component: ChainingPipesComponent;
  let fixture: ComponentFixture<ChainingPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainingPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
