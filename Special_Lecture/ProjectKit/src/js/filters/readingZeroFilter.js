'use strict';

// let angular = require('angular');

angular.module('BipanListApp').filter('readingZero', function(){
  return function(input){
    return input < 10 ? ('0' + input) : input;
  };
});
