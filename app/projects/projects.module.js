import angular from 'angular';
import uirouter from 'angular-ui-router';
import ProjectsCtrl from './projects.controller';
import ProjectsRoutes from './projects.routes';
import ProjectsDirective from './projects.directive'
import ProjectsService from './projects.service'

export default angular.module('app.projects',[uirouter])
  .controller('ProjectsCtrl', ProjectsCtrl)
  .config(ProjectsRoutes)
  .directive('projectList', [() => new ProjectsDirective()])
  .service('ProjectsService', ProjectsService)
