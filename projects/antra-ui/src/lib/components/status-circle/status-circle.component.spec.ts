import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AntraUiModule } from '../../antra-ui.module';
import { StatusCircleComponent } from './status-circle.component';

@Component({
  template: ` <antra-status-circle [percentage]="percentage" [radius]="radius"></antra-status-circle> `,
})
class TestHostComponent {
  percentage = '50';
  radius = '4';
}

describe('StatusCircleComponent ', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StatusCircleComponent, TestHostComponent],
        imports: [AntraUiModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have radius = 4', () => {
    component.percentage = '50';
    component.radius = '4';
    fixture.detectChanges();
    const radiusElement = fixture.nativeElement.querySelector('.status-circle-1to50percent');
    expect(radiusElement.style.r).toContain('4');
  });

  it('should have radius = 8', () => {
    component.percentage = '75';
    component.radius = '8';
    fixture.detectChanges();
    const radiusElement = fixture.nativeElement.querySelector('.status-circle-51to80percent');
    expect(radiusElement.style.r).toContain('8');
  });

  it('should have radius = 11', () => {
    component.percentage = '100';
    component.radius = '11';
    fixture.detectChanges();
    const radiusElement = fixture.nativeElement.querySelector('.status-circle-81to100percent');
    expect(radiusElement.style.r).toContain('11');
  });
});


