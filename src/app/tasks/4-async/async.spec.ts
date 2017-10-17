import {async, fakeAsync, tick} from '@angular/core/testing';

describe('async', () => {
    describe('done', () => {
        it('should stop test when done', () => {
            let value = 0;

            setTimeout(() => {
                value = 5;
                expect(value).toEqual(5);
            }, 200);

            expect(value).toEqual(0);
        });
    });

    describe('async', () => {
        it('should stop test', () => {

            let value = 0;

            setTimeout(() => {
                value = 5;
                expect(value).toEqual(5);
            }, 200);

            expect(value).toEqual(0);
        });
    });

    describe('fakeAsync', () => {
        it('should stop test', () => {

            let value = 0;

            setTimeout(() => {
                value = 5;
            }, 200);

            expect(value).toEqual(5);
        });
    });
});
