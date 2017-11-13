export default class TasksDirective {
  constructor() {
    this.templateUrl = 'app/tasks/taskslist.tpl.html';
    this.restrict = 'E';
    this.scope = {
        projid: '='
    };
    this.transclude = true;
    this.controller = 'TasksCtrl';
    this.controllerAs = 'tsk';
  }
}
