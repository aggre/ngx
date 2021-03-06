import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { StoreModule } from '@lacolaco/ngx-store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [GridLayoutModule, StoreModule.forRoot({})],
        declarations: [AppComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
