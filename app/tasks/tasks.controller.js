export default class TasksCtrl{
  constructor($scope, $http, TasksService){
    this.tasks = [];
    this.service = TasksService;
    this.$scope = $scope;
    console.log('constructor TASKS');
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
      }.bind(this));
  }

  movePosition(projid, obj, position){
    var oldIndex = this.tasks.indexOf(obj);
    var arrayClone = [];
    if (oldIndex > -1){
      var newIndex = (oldIndex + position);

      if (newIndex < 0){
        newIndex = 0
      }else if (newIndex >= this.tasks.length){
        newIndex = this.tasks.length
      }
      arrayClone = this.tasks.slice();
      arrayClone[oldIndex]['position']=newIndex
      arrayClone.splice(oldIndex,1);
      arrayClone[newIndex]['position']=oldIndex
      arrayClone.splice(newIndex,0,this.tasks[oldIndex]);

      // console.log(arrayClone)
      // this.tasks = arrayClone;
      this.service.movePositionAPI(projid, arrayClone)
        .then(function(response){
          this.tasks = arrayClone;
        }.bind(this));

    }
  }

  finished(projid, task, status){
    this.service.changeTaskStatusAPI(projid, task, status)
      .then(function(response){
        // this.tasks = response.data;
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
    this.service.editTaskAPI(task)
      .then(function(response) {
      }.bind(this));
  }

  deleteTask(task){
    this.service.deleteTaskAPI(task.id)
      .then(function(response) {
        this.tasks = this.tasks.filter(function( obj ) {
            return obj.id !== task;
        });
      }.bind(this));
  }
}
