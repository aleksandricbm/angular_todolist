export default class ProjectsCtrl{
  constructor($scope, $http, ProjectsService, Flash, $window){
    this.projects = [];
    this.projects_copy = [];
    this.service = ProjectsService;
    this.showProjectList = [];
    this.$scope = $scope;
    this.Flash = Flash;
    this.$window = $window;
  }

  createProject(projname){
    this.service.createProjectAPI(projname)
      .then(function(response) {
        this.projects.push (response.data);
      }.bind(this))
      .catch(function(response){
        this.Flash.create('danger', response.data.name);
      }.bind(this))
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

  deleteProject(project){
    var confirm = this.$window.confirm('Do you realy want to delete "' + project.name + '"?');
    if (!confirm) { return false; }

    this.service.deleteProjectAPI(project.id)
      .then(function(response) {
        this.projects = this.projects.filter(function( obj ) {
            return obj.id !== project.id;
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
