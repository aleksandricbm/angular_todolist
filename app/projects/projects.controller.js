export default class ProjectsCtrl{
  constructor($scope, $http, ProjectsService){
    this.projects = [];
    console.log('constructor ProjectsCtrl');
    // this.tasks = [];
  //   this.projects['aa']=[
  //   [1,6,3],
  //   [5,2,7],
  //   [9,10,11],
  // ];
  //   console.log('start=' + this.projects['aa']);
    this.service = ProjectsService;
    this.$scope = $scope;
    $scope.createTask = function(task, proj) {
        $http.post
        ('/api/tasks', JSON.stringify({ project: proj, name: task }))
            .then(function(response) {
              $scope.projects.push (response.data);
            });
      };

  }
  createProject(projname){
    this.service.createProjectAPI(projname)
      .then(function(response) {
        this.projects.push (response.data);
      }.bind(this));
  }

  getListProjects(){
    this.service.getListProjectsAPI()
      .then(function(response){
        this.projects = response.data;
      }.bind(this));
  }
  // getTasksList(proj){
  //   this.service.getTasksListAPI(proj)
  //     .then(function(response){
  //       this.tasks = response.data;
  //     }.bind(this));
  // }
}
