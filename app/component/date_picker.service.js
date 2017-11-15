export default class DatePickerService{
  constructor($http){
    this.$http = $http;
  }

  createDeadLineAPI(data){
    return this.$http.put('/api/v1/tasks/' + data.task_id,  data );
  }
}
