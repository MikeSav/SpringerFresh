'use strict';

angular.module('SpringerFresh')
  .service('WatermarkService', function ($http, Watermark) {

    this.getRecentTickets = function () {
      return $http.get('/queryrecenttickets').then(function (response) {
        return response;
      }, function (response) {
        console.log('[Error getRecentTickets] :', response);
      });
    };

    this.queryTicket = function (ticket) {
      return $http.post('/queryticket', {ticket: ticket}).then(function (response) {

        return new Watermark(
          response.data.content,
          response.data.title,
          response.data.author,
          response.data.topic
        );
      }, function (response) {
        console.log('[Error WatermarkService] :', response);
        return null;
      });
    };
  });

