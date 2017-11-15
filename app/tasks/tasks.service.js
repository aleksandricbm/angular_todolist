export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(projid) {
    return this.$http.get( process.env.API_URL + '/tasks', { params: { project_id: projid } } )
  }

  createTaskAPI(task, projid){
    return this.$http.post( process.env.API_URL + '/tasks', { project_id: projid, name: task } );
  }

  updateAPI(taskid, params){
    return this.$http.put( process.env.API_URL + '/tasks/' + taskid, params );
  }

  deleteTaskAPI(taskid, projid) {
    return this.$http.delete( process.env.API_URL + '/tasks/' + taskid, { params: { project_id: projid } } );
  }
}
