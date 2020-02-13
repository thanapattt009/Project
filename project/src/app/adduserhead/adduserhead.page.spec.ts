import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdduserheadPage } from './adduserhead.page';

describe('AdduserheadPage', () => {
  let component: AdduserheadPage;
  let fixture: ComponentFixture<AdduserheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserheadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdduserheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
