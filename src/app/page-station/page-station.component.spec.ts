import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStationComponent } from './page-station.component';

describe('PageStationComponent', () => {
  let component: PageStationComponent;
  let fixture: ComponentFixture<PageStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStationComponent]
    });
    fixture = TestBed.createComponent(PageStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
