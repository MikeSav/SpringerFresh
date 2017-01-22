'use strict';

angular.module('SpringerFresh')
    .controller('TicketCtrl', function (WatermarkService, Watermark) {

        var ticket = this;
        ticket.queryTrue = false;
        ticket.showNotFound = false;
        ticket.watermarkTicket = '123-345';

        // get a list of recent ticket tokens for the list, makes it easier...
        WatermarkService.getRecentTickets().then(function (response) {
            ticket.recentTickets = response.data.tickets;
        });

        ticket.checkRecentTicket = function (r) {
            ticket.watermarkTicket = r;
            ticket.getTicketStatus();
        };

        ticket.getTicketStatus = function () {
            ticket.queryTrue = false;
            ticket.showNotFound = false;

            WatermarkService.queryTicket(ticket.watermarkTicket).then(function (response) {

                if (response instanceof Watermark) {
                    ticket.queryTrue = true;
                    ticket.processTicket = response;
                } else {
                    ticket.queryTrue = false;
                    ticket.showNotFound = true;
                }
            });
        };
    });
