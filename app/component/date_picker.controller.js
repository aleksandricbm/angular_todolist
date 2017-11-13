export default class DatePickerCtrl{
  constructor($scope, $http, $filter, DatePickerService){
    this.$scope = $scope;
    this.minDateMoment = moment().subtract(1, 'day');
    this.minDateString = moment().subtract(1, 'day').format('DD/MM/YYYY');
    this.minView = 'month';
    this.form = {};
    this.today = true;
    var dl = this.$scope.task.deadline === null? new Date() : this.$scope.task.deadline
    this.deadline_date = moment.utc(dl).format('DD/MM/YYYY')
    this.deadline_time = moment.utc(dl).format('HH:mm');

    this.service = DatePickerService;
  }

  closeModalDatePicker(){
    this.$scope.showdatepicker = false;
  }
  saveDatePickerForm(){
      var deadline = this.$scope.datepicker.deadline_date + " " + this.$scope.datepicker.deadline_time
      var params = {
        project_id: this.$scope.task.project_id,
        task_id: this.$scope.task.id,
        deadline: deadline
      };
      console.log(this.$scope.task.name);
      this.service.createDeadLineAPI(params)
        .then(function(response){
          $('#myModalDatePicker').modal("hide");
          this.$scope.task.deadline = params.deadline;
          this.$scope.showdatepicker = false;
        }.bind(this));
  }
}
