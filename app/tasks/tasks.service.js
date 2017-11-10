export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(proj) {
    return this.$http.get('/api/v1/tasks', { params: { project_id: proj } } )
  }

  createTaskAPI(task, proj){
    return this.$http.post('/api/v1/tasks', { project_id: proj, name: task } );
  }

  movePositionAPI(projid, obj){
    return this.$http.put('/api/v1/tasks/sort', { project_id: projid, params: obj } );
  }

  changeTaskStatusAPI(projid, task){
    return this.$http.put('/api/v1/tasks/'+ task +'/completed',
      { project_id: projid });
  }

  editTaskAPI(task) {
    return this.$http.patch('/api/v1/tasks/' + task.id, { name: task.name, project_id: task.project_id } );
  }

  deleteTaskAPI(taskid, projid) {
    return this.$http.delete('/api/v1/tasks/' + taskid, { params: { project_id: projid } } );
  }
}
