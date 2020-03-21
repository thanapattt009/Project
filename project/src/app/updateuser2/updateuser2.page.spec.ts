import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Updateuser2Page } from './updateuser2.page';

describe('Updateuser2Page', () => {
  let component: Updateuser2Page;
  let fixture: ComponentFixture<Updateuser2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updateuser2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Updateuser2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
