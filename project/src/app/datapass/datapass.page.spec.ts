import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatapassPage } from './datapass.page';

describe('DatapassPage', () => {
  let component: DatapassPage;
  let fixture: ComponentFixture<DatapassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatapassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
