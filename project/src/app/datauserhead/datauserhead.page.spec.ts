import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatauserheadPage } from './datauserhead.page';

describe('DatauserheadPage', () => {
  let component: DatauserheadPage;
  let fixture: ComponentFixture<DatauserheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatauserheadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatauserheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
