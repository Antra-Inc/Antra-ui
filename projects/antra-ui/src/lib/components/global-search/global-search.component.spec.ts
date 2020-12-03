import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AntraUiModule } from '../../antra-ui.module';
import { GlobalSearchComponent } from './global-search.component';

@Component({
  template: `<antra-global-search placeholderText="Please type here..." class="customized-1" (notify)="handleNotify($event)"></antra-global-search>`,
})
class TestHostComponent {
  placeholderText = 'Please type here...';
}

describe('GlobalSearchComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GlobalSearchComponent, TestHostComponent],
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

  it('should have placeholder value `Please type here...`', () => {
    component.placeholderText = 'Please type here...';
    fixture.detectChanges();
    const textElement = fixture.nativeElement.querySelector('[placeholder="Please type here..."]');
    fixture.detectChanges();
    expect(textElement.placeholder.trim()).toBe('Please type here...');
  });

});


