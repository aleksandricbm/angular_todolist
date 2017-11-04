export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(proj) {
    return this.$http.get('/api/tasks', { params: { project: proj }})
  }

  createTaskAPI(task, proj){
    return this.$http.post('/api/tasks', { params: {name: task, project: proj }});
  }

  movePositionAPI(projid, obj){
    return this.$http.put('/api/tasks/sort', { proj_id: projid, params: obj });
  }

  changeTaskStatusAPI(projid, task, status){
    return this.$http.put('/api/tasks/'+ task +'/completed',
      { proj_id: projid, status: status });
  }

  editTaskAPI(proj) {
    return this.$http.patch('/api/projects', { params: {name: proj.name, id: proj.id }});
  }

  deleteTaskAPI(taskid) {
    return this.$http.delete('/api/tasks/' + taskid);
  }
}
