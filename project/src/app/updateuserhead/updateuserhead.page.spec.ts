import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateuserheadPage } from './updateuserhead.page';

describe('UpdateuserheadPage', () => {
  let component: UpdateuserheadPage;
  let fixture: ComponentFixture<UpdateuserheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateuserheadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateuserheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
