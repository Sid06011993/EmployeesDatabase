import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateemployeeComponent } from './createemployee.component';
import { EmployeesService} from '../employees.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('CreateemployeeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [CreateemployeeComponent],
      providers: [{provide: ActivatedRoute, useValue: {
        params: of({ id: 1 }) 
      }},EmployeesService, ] 
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CreateemployeeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});