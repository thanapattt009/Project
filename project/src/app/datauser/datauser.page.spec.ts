import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatauserPage } from './datauser.page';

describe('DatauserPage', () => {
  let component: DatauserPage;
  let fixture: ComponentFixture<DatauserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatauserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatauserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
