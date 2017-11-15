export default class DatePickerService{
  constructor($http){
    this.$http = $http;
  }

  createDeadLineAPI(data){
    return this.$http.put( process.env.API_URL + '/tasks/' + data.task_id,  data );
  }
}
