export default class TasksCtrl{
  constructor($scope, $http, TasksService){
    this.tasks = [];
    this.service = TasksService;
    this.$scope = $scope;
    console.log('constructor TASKS');

    this.$scope.title = "Angularjs Bootstrap Modal Directive Example";
    this.$scope.showModal1 = false;
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

  finished(projid, task){
    this.service.changeTaskStatusAPI(projid, task)
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

  deleteTask(task, projid){
    this.service.deleteTaskAPI(task.id, projid)
      .then(function(response) {
        this.tasks = this.tasks.filter(function( obj ) {
            return obj.id !== task.id;
        });
      }.bind(this));
  }

  hide(m) {
    if(m === 1){
        this.$scope.showModal1 = false;
    }else{
        this.$scope.showModal2 = false;
      }
  }

  modalOneShown() {
    console.log('model one shown');
  }

  modalOneHide() {
    console.log('mo=='+this.$scope.showModal1);
    this.$scope.showModal1 = false;
    console.log('model one hidden');
  }

}
