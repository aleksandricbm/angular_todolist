export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(proj) {
    return this.$http.get('/api/tasks', { params: { project: proj }})
  }
}
