import {HeroService} from './hero';

describe('Isolated test', () => {

    const stubList = ['The Flash', 'Antman'];

    describe('when getting a list of heroes', () => {
        it('should make a GET request to /heroes', () => {
            // Arrange

            // Act
            let actual;

            // Assert
            // expect(httpSpy.get).toHaveBeenCalledWith('/heroes');
            // expect(actual).toEqual(stubList);
        });
    });
});
