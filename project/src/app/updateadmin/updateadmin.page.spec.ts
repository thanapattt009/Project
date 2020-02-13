import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateadminPage } from './updateadmin.page';

describe('UpdateadminPage', () => {
  let component: UpdateadminPage;
  let fixture: ComponentFixture<UpdateadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
