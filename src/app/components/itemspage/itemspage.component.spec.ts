import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemspageComponent } from './itemspage.component';

describe('ItemspageComponent', () => {
  let component: ItemspageComponent;
  let fixture: ComponentFixture<ItemspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
