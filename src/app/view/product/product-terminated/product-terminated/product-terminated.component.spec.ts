import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTerminatedComponent } from './product-terminated.component';

describe('ProductTerminatedComponent', () => {
  let component: ProductTerminatedComponent;
  let fixture: ComponentFixture<ProductTerminatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTerminatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTerminatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
