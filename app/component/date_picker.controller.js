export default class DatePickerCtrl{
  constructor($scope, $http, $filter){
    this.$scope = $scope;
    this.minDateMoment = moment().subtract(1, 'day');
    this.minDateString = moment().subtract(1, 'day').format('dd/mm/YYYY');
    this.minView = 'month';
    this.today = true;
    var dates = new Date(this.$scope.task.deadline);
    this.deadline_date = $filter('date')(dates, "dd-MM-yyyy");
    this.deadline_time = $filter('date')(dates, "HH:mm");
    // console.log(this.$scope);
  }

  closeModalDatePicker(){
    this.$scope.showdatepicker = false;
  }
  saveDatePickerForm(model, form){
      // var params = {
      //   project_id: this.$scope.task.projid,
      //   task_id: this.$scope.task.taskid//,
      //   // comments: model.comment
      // };

      console.log("1_"+form);
      this.$scope.task.name = 'TEST';
      console.log(this.$scope);
      // this.$scope.showdatepicker = false;
      // this.service.createCommentAPI(params)
      //   .then(function(response){
      //     this.comments.push(response.data);
      //   }.bind(this));
  }
}
