export default class TasksCtrl{
  constructor($scope, $http, TasksService, $rootScope, $window, Flash){
    this.tasks = [];
    this.tasks_copy = [];
    this.service = TasksService;
    this.$scope = $scope;
    this.showdatepicker = [];
    this.$window = $window;
    this.Flash = Flash;
    this.dateNow = new Date();
  }

  getTasksList(proj){
    this.service.getTasksListAPI(proj)
      .then(function(response){
        this.tasks = response.data;
      }.bind(this));
  }

  createTask(task, proj){
    this.service.createTaskAPI(task, proj)
      .then(function(response){
        this.tasks.push(response.data);
        this.$scope.tasknew = "";
      }.bind(this));
  }

  movePosition(projid, taskid, direction){
      var params = {
        project_id: projid,
        direction: direction
      };
      this.service.updateAPI(taskid, params)
        .then(function(response){
          this.tasks = response.data;
        }.bind(this));
  }

  allTaskFinished() {
    var count=0;
    angular.forEach(this.tasks, function(arr){
      arr.completed === true ? count+=1 : '';
    })
    if (this.tasks.length == count) this.Flash.create('success', 'Well Done! You’re successfully completed all the task.');
  }

  finished(taskid){
    var params = {
        project_id: this.$scope.projid,
        completed: 0
      };
    this.service.updateAPI(taskid, params)
      .then(function(response){
        this.tasks = response.data;
        this.allTaskFinished();
      }.bind(this));
  }

  edit(task){
    var index = this.tasks.indexOf(task);
    this.tasks_copy[index] = angular.copy(this.tasks[index])
  }

  cancel(task){
    var index = this.tasks.indexOf(task);
    this.tasks[index] = angular.copy(this.tasks_copy[index])
  }

  editTask(task){
    var params = {
        project_id: this.$scope.projid,
        name: task.name
      };
    this.service.updateAPI(task.id, params)
      .then(function(response) {
        this.tasks = response.data;
      }.bind(this));
  }

  deleteTask(task, projid){
    var confirm = this.$window.confirm('Do you realy want to delete "' + task.name + '"?');
    if (!confirm) { return false; }
    this.service.deleteTaskAPI(task.id, projid)
      .then(function(response) {
        this.tasks = this.tasks.filter(function( obj ) {
            return obj.id !== task.id;
        });
      }.bind(this));
  }

  checkDate(date){
    if (date === null) return false;
    return moment.utc(date) > moment.utc(new Date()) ? true : false
  }
}
