export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(projid) {
    return this.$http.get('/api/v1/tasks', { params: { project_id: projid } } )
  }

  createTaskAPI(task, projid){
    return this.$http.post('/api/v1/tasks', { project_id: projid, name: task } );
  }

  updateAPI(taskid, params){
    return this.$http.put('/api/v1/tasks/' + taskid, params );
  }

  deleteTaskAPI(taskid, projid) {
    return this.$http.delete('/api/v1/tasks/' + taskid, { params: { project_id: projid } } );
  }
}
