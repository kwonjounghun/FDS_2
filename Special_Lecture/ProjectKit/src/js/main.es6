/*! main.js © yamoo9.net, 2016 */


//=------------------------------
//빌드 시에 아래 주석을 해제한 후, 빌드
//==================================

// require('jquery');
// let angular = require('angular');

let bipan = angular.module('BipanListApp',[]);



require('./controllers/bipan.js');
//Custom Filter
require('./filters/readingZeroFilter.js');
