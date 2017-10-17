import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Comment} from '../../../json-placeholder-api/comment/comment';
import {CommentListComponent} from './comment-list.component';
import {CommentComponent} from '../comment/comment.component';
import {SharedModule} from '../../../shared/shared.module';
import {SpinnerComponent} from '../../../shared/spinner/spinner.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';

describe('[Integrated] CommentListComponent', () => {
    let component: CommentListComponent;
    let fixture: ComponentFixture<CommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, FormsModule],
            declarations: [CommentListComponent, CommentComponent, AddCommentComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentListComponent);
        component = fixture.componentInstance;

        // calls component lifecycle methods (ngOnInit)
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when there is a list of comments', () => {
        const mockList: Comment[] = [];
        beforeEach(() => {
        });
        it('should render a list of app-comments', () => {
        });
        it('should not show spinner', () => {
        });
    });
    describe('when there is no list of components', () => {
        beforeEach(() => {
            component.comments = null;
            fixture.detectChanges();
        });
        it('should show a spinner', () => {
        });
    });
});
