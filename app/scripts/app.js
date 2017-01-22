'use strict';

angular
  .module('SpringerFresh', ['ngMockE2E'])
  .run(function ($httpBackend) {
    // we don't have a backend so I mocked one...
    var watermarks = new Map();

    watermarks.set('123-345', [200, {
      content: 'Book',
      title: 'JavaScript Mike Savage Style',
      author: 'Mike Savage',
      topic: 'Web Development'
    }, {}]);
    watermarks.set('123-231', [200, {
      content: 'Book',
      title: 'JavaScript The Definitive Guide (Definitive Guides)',
      author: 'David Flanagan',
      topic: 'Web Development'
    }, {}]);
    watermarks.set('123-980', [200, {
      content: 'Book',
      title: 'JavaScript The Good Parts: Working with the Shallow Grain of JavaScript',
      author: 'Douglas Crockford',
      topic: 'Web Development'
    }, {}]);
    watermarks.set('123-777', [200, {
      content: 'Journal',
      title: 'RxJS and why Observables rock!',
      author: 'Juan Gomez'
    }, {}]);
    watermarks.set('123-088', [200, {
      content: 'Journal',
      title: 'My pretty lousy life as SpiderMan',
      author: 'Peter Parker'
    }, {}]);
    watermarks.set('123-089', [200, {
      content: 'Book',
      title: 'When boyfriends aint so super',
      author: 'Mary Jane',
      topic: 'Doomed Romance'
    }, {}]);

    $httpBackend.whenGET('/queryrecenttickets').respond(function () {

      var watermarkKeys = [];
      watermarks.forEach(function (value, key) {
        watermarkKeys.push(key);
      });

      return [200, {tickets: watermarkKeys}, {}];
    });

    $httpBackend.whenPOST('/queryticket').respond(function (method, url, data) {
      data = JSON.parse(data);
      return watermarks.has(data.ticket) ? watermarks.get(data.ticket) : {};
    });
  });
