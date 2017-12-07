import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should combine both firstName and lastName', () => {
    const firstName = 'Paul';
    const lastName = 'Halliday';

    const combinedName = comp.combineNames(firstName, lastName);

    expect(combinedName).toEqual(`${firstName} ${lastName}`);
  });
});
