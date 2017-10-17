import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentComponent} from './comment.component';
import {Comment} from '../../../json-placeholder-api/comment/comment';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when there is no comment', () => {
        beforeEach(() => {
            component.comment = null;
            fixture.detectChanges();
        });
        it('should not render comment', () => {
        });
    });

    describe('when there is a comment', () => {
        it('should render comment', () => {
        });
    });
});
