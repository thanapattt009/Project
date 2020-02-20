import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisteruserheadPage } from './registeruserhead.page';

describe('RegisteruserheadPage', () => {
  let component: RegisteruserheadPage;
  let fixture: ComponentFixture<RegisteruserheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteruserheadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteruserheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
