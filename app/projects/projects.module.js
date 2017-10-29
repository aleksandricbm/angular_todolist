import angular from 'angular';
import uirouter from 'angular-ui-router';
import ProjectsCtrl from './projects.controller';
angular.module('app',[uirouter])
  .controller('ProjectsCtrl', ProjectsCtrl)
