export default class ProjectsDirective {
  constructor(ProjectsService) {
    this.templateUrl = 'app/projects/projectlist.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        tasks: '='
    };
    this.link = function(scope) {
    };
  }
}
