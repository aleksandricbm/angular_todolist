export default class TasksCtrl{
  constructor($scope, $http, TasksService){
    this.tasks = [];
    this.service = TasksService;
    this.$scope = $scope;
    // $scope.createTask = function(task, proj) {
    //     $http.post
    //     ('/api/tasks', JSON.stringify({ project: proj, name: task }))
    //         .then(function(response) {
    //           $scope.projects.push (response.data);
    //         });
    //   };
    console.log('constructor TASKS');
  }
  getTasksList(proj){
    this.service.getTasksListAPI(proj)
      .then(function(response){
        this.tasks[proj] = response.data;
      }.bind(this));
  }
}
