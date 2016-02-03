import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './route';
import controller from './controller';

export default angular.module('app.home',[uirouter])
.config(routing)
.controller('HomeController',controller)
.name;