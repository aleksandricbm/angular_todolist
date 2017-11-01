export default class TasksDirective {
  constructor() {
    this.templateUrl = 'app/tasks/taskslist.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        tasks: '='
    };
  this.link = function(scope) {
      console.log("directive Tasks");
    };
  }
}
