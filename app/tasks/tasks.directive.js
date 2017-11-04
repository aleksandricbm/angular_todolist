export default class TasksDirective {
  constructor() {
    this.templateUrl = 'app/tasks/taskslist.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        // tasks: '='
        projid: '='
    };
    this.transclude = true;
    this.controller = 'TasksCtrl';
    this.controllerAs = 'tsk';
  this.link = function(scope) {
      console.log("directive Tasks");
    };
  }
}
