export default class ProjectsCtrl{
  constructor($scope, $http, ProjectsService){
    this.projects = [];
    this.projects_copy = [];
    this.service = ProjectsService;
    this.showProjectList = [];
    this.$scope = $scope;
    console.log('constructor ProjectsCtrl');
  }

  createProject(projname){
    this.service.createProjectAPI(projname)
      .then(function(response) {
        this.projects.push (response.data);
      }.bind(this));
  }

  edit(proj){
    var index = this.projects.indexOf(proj);
    this.projects_copy[index] = angular.copy(this.projects[index])
  }

  cancel(proj){
    var index = this.projects.indexOf(proj);
    this.projects[index] = angular.copy(this.projects_copy[index])
  }

  editProject(proj){
    this.service.editProjectAPI(proj)
      .then(function(response) {
      }.bind(this));
  }

  deleteProject(projid){
    this.service.deleteProjectAPI(projid)
      .then(function(response) {
        this.projects = this.projects.filter(function( obj ) {
            return obj.id !== projid;
        });
      }.bind(this));
  }

  getListProjects(){
    this.service.getListProjectsAPI()
      .then(function(response){
        this.projects = response.data;
      }.bind(this));
  }

  showTaskList(projid){
    if (this.showProjectList.length>0)
    {
      this.showProjectList = this.showProjectList.filter(function( obj ) {
            return obj !== true;
        });
    }
    this.showProjectList[projid] = !this.showProjectList[projid];
  }
}
