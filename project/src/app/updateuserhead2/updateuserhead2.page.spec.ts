import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Updateuserhead2Page } from './updateuserhead2.page';

describe('Updateuserhead2Page', () => {
  let component: Updateuserhead2Page;
  let fixture: ComponentFixture<Updateuserhead2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updateuserhead2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Updateuserhead2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
