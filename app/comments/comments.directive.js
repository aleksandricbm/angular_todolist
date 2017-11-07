export default class CommentsDirective {
  constructor() {
    this.templateUrl = 'app/comments/comments.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        taskid: '=',
        projid: '='
    };
    this.controller = 'CommentsCtrl';
    this.controllerAs = 'comctrl';
    this.link = function(scope, element, attributes) {
      console.log("directive CommentsDirective");
    };
  }
}
