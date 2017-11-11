import angular from 'angular';
import uirouter from 'angular-ui-router';
import TasksCtrl from './tasks.controller';
import TasksRoutes from './tasks.routes';
import TasksDirective from './tasks.directive'
import DatePickerDirective from '../component/date_picker.directive'
import DatePickerCtrl from '../component/date_picker.controller'
import DatePickerService from '../component/date_picker.service'
import TasksService from './tasks.service'

export default angular.module('app.tasks',[uirouter])
  .controller('TasksCtrl', TasksCtrl)
  .controller('DatePickerCtrl', DatePickerCtrl)
  .config(TasksRoutes)
  .directive('tasksList', [() => new TasksDirective()])
  .directive('datePicker', [() => new DatePickerDirective()])
  .service('TasksService', TasksService)
  .service('DatePickerService', DatePickerService)

