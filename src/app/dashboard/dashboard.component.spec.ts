import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ActivatedRoute } from '@angular/router';  // ✅ Import ActivatedRoute
import { of } from 'rxjs';  // ✅ Import 'of' to create mock observables
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],  
      declarations: [DashboardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { 
            params: of({ id: '123' }),  // ✅ Mock route parameters
            queryParams: of({ search: 'hello' })  // ✅ Mock query parameters
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
