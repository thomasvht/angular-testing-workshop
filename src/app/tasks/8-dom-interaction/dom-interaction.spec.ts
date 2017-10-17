import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {TestComponent} from './comp';
import {FormsModule, NgModel} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('Dom interaction', () => {
    let fixture: ComponentFixture<TestComponent>;
    let comp: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should set default title', () => {
    });
    it('when model changes it should render a new title', fakeAsync(() => {
    }));
});
