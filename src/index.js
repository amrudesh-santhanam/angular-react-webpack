'use strict';

import angular from 'angular';
import React from 'react';
import ngReact from 'ngReact';

import HelloComponent from './components/hello-component';

angular.module('angReactWebpackApp',['react']);

mainCtrl.$inject = ['$rootScope'];
function mainCtrl($rootScope){
  var vm = this;
  vm.ctrlname = 'mainCtrl';
  vm.person = {fname: 'amrud', lname: 'sant'};
  vm.changeName = changeName;

  function changeName(){
    vm.person = Object.assign({},vm.person,{fname:'amrudesh'});
    $rootScope.$emit('name-changed',vm.person)
  }
}
angular.module('angReactWebpackApp').controller('mainCtrl',mainCtrl);

helloDirective.$inject = ['reactDirective'];
function helloDirective(reactDirective) {
  return reactDirective(HelloComponent);
}
angular.module('angReactWebpackApp').directive('helloComponent', helloDirective);

dupCtrl.$inject = ['$rootScope'];
function dupCtrl($rootScope){
  var vm = this;
  vm.ctrlname = 'dupCtrl';
  vm.person = {fname: 'asdf', lname: 'dfgsdfg'};
  $rootScope.$on('name-changed',function(event, value){
    vm.person = value;
  });
}
angular.module('angReactWebpackApp').controller('dupCtrl',dupCtrl);


angular.bootstrap(document.body, ['angReactWebpackApp'], {strictDi: true});
