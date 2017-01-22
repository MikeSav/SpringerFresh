'use strict';

angular.module('SpringerFresh')
  .factory('Watermark', function () {

    // Constructor, with class name
    // Assumption: that backend gives us a topic or not!
    function Watermark(content, title, author, topic) {
      this.content = content;
      this.title = title;
      this.author = author;
      if(topic) {
        this.topic = topic;
      }
    }

    // Example Public method, assigned to prototype
    Watermark.prototype.getDocumentType = function () {
      return this.content;
    };

    return Watermark;
  });
