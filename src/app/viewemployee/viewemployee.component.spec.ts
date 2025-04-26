import { TestBed } from '@angular/core/testing';
import { ViewemployeeComponent } from './viewemployee.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewemployeeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ViewemployeeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),  // ✅ Mock route parameters (if used)
            queryParams: of({ search: 'hello' })  // ✅ Mock query parameters (if used)
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ViewemployeeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
