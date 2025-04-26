import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { LoadingpageComponent } from './loadingpage.component';

describe('LoadingpageComponent', () => {
  let component: LoadingpageComponent;
  let fixture: ComponentFixture<LoadingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ LoadingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
