'use strict';

describe('Service: WatermarkService', function () {

    // load the module / APP
    beforeEach(module('SpringerFresh'));

    // Initialize the service and a mock scope
    var WatermarkService, $httpBackend, Watermark;

    beforeEach(inject(function (_$httpBackend_, _WatermarkService_, _Watermark_){
        $httpBackend = _$httpBackend_;
        WatermarkService = _WatermarkService_;
        Watermark = _Watermark_;

        setTimeout(function(done) {
            done();
        }, 1);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function () {

        expect(WatermarkService).toBeTruthy();
    });

    it('should return an string array when calling getRecentTickets', function () {
        $httpBackend.expectGET('/queryrecenttickets').respond(200, ['123-345', '123-231', '123-980', '123-777', '123-089']);
        WatermarkService.getRecentTickets().then(function (response) {

            expect(response.data).toEqual(['123-345', '123-231', '123-980', '123-777', '123-089']);
        });
        $httpBackend.flush();
    });

    it('should return an Watermark Object when calling queryTicket with a valid ticket / string', function () {
        $httpBackend.expectPOST('/queryticket').respond(200, new Watermark('Book', 'JavaScript Mike Savage Style', 'Mike Savage', 'Web Development'));
        WatermarkService.queryTicket({ticket: '123-345'}).then(function (response) {

            expect(response instanceof Watermark).toBeTruthy();
        });
        $httpBackend.flush();
    });

    it('should return an Watermark Object with a topic when the content is a book', function () {
        $httpBackend.expectPOST('/queryticket').respond(200, new Watermark('Book', 'JavaScript The Good Parts: Working with the Shallow Grain of JavaScript', 'Douglas Crockford', 'Web Development'));
        WatermarkService.queryTicket({ticket: '123-345'}).then(function (response) {

            expect(Object.keys(response)).toContain('topic');
        });
        $httpBackend.flush();
    });

    it('should return an Watermark Object with no topic when the content is a journal', function () {
        $httpBackend.expectPOST('/queryticket').respond(200, new Watermark('Journal','RxJS and why Observables rock!','Juan Gomez'));
        WatermarkService.queryTicket({ticket: '123-777'}).then(function (response) {

            expect(Object.keys(response)).not.toContain('topic');
        });
        $httpBackend.flush();
    });

    it('should not return an Object when calling queryTicket with a invalid ticket / string', function () {
        $httpBackend.expectPOST('/queryticket').respond(200, {});
        WatermarkService.queryTicket({ticket: 'XYZ'}).then(function (response) {

            expect(response instanceof Object).toBeTruthy();
        });
        $httpBackend.flush();
    });
});
