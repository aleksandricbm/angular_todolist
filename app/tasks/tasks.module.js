import angular from 'angular';
import uirouter from 'angular-ui-router';
import TasksCtrl from './tasks.controller';
import TasksRoutes from './tasks.routes';
import TasksDirective from './tasks.directive'
import ModalDirective from './modal.directive'
import TasksService from './tasks.service'

export default angular.module('app.tasks',[uirouter])
  .controller('TasksCtrl', TasksCtrl)
  .config(TasksRoutes)
  .directive('tasksList', [() => new TasksDirective()])
  .directive('modal', [() => new ModalDirective()])
  .service('TasksService', TasksService)
