import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataadminPage } from './dataadmin.page';

describe('DataadminPage', () => {
  let component: DataadminPage;
  let fixture: ComponentFixture<DataadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
