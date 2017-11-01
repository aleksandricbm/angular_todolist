export default class ProjectsDirective {
  constructor(ProjectsService) {
    this.templateUrl = 'app/projects/projectlist.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        projects: '=',
        gettasks: "&",
        tasks: '='
    };
  this.link = function(scope) {
      // console.log("directive");
    };
  }
}
