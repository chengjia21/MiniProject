import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineEncyclopediaComponent } from './wine-encyclopedia.component';

describe('WineEncyclopediaComponent', () => {
  let component: WineEncyclopediaComponent;
  let fixture: ComponentFixture<WineEncyclopediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineEncyclopediaComponent]
    });
    fixture = TestBed.createComponent(WineEncyclopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
