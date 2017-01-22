'use strict';

describe('Service: Watermark', function () {

    // load the module / APP
    beforeEach(module('SpringerFresh'));

    var Watermark,
        waterMark;

    beforeEach(inject(function (_Watermark_) {
        Watermark = _Watermark_;
        waterMark = new Watermark('Book', 'When boyfriends aint so super', 'Mary Jane', 'Doomed Romance');

        setTimeout(function (done) {
            done();
        }, 1);

    }));

    it('should be defined', function () {
        expect(Watermark).toBeTruthy();
    });

    describe('when defining a watermark with content "Book"', function () {

        it('should be an instance of "Watermark"', function () {

            expect(waterMark instanceof Watermark).toBeTruthy();
        });

        it('should contain a content property with value "book"', function () {

            expect(waterMark).toEqual(jasmine.objectContaining({
                content: 'Book'
            }));
        });

        it('should contain a title property with value "When boyfriends aint so super"', function () {

            expect(waterMark).toEqual(jasmine.objectContaining({
                title: 'When boyfriends aint so super'
            }));
        });

        it('should contain a author property with "Mary Jane"', function () {

            expect(waterMark).toEqual(jasmine.objectContaining({
                author: 'Mary Jane'
            }));
        });

        it('should contain a topic property with "Doomed Romance"', function () {

            expect(waterMark).toEqual(jasmine.objectContaining({
                topic: 'Doomed Romance'
            }));
        });

        it('should return "book" when the getDocumentType is called"', function () {

            expect(waterMark.getDocumentType()).toEqual('Book');
        });
    });

    describe('when defining a watermark with content "journal"', function () {

        it('should not contain a topic property', function () {
            var waterMark = new Watermark('Journal', 'My pretty lousy life as SpiderMan', 'Peter Parker');

            expect(Object.keys(waterMark)).not.toContain('topic');
        });
    });
});
