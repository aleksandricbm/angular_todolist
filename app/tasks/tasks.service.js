export default class TasksService{
  constructor($http){
    this.$http = $http;
  }

  getTasksListAPI(proj) {
    return this.$http.get('/api/tasks', { params: { project_id: proj }})
  }

  createTaskAPI(task, proj){
    return this.$http.post('/api/tasks', { name: task, project_id: proj });
  }

  movePositionAPI(projid, obj){
    return this.$http.put('/api/tasks/sort', { project_id: projid, params: obj });
  }

  changeTaskStatusAPI(projid, task){
    return this.$http.put('/api/tasks/'+ task +'/completed',
      { project_id: projid });
  }

  editTaskAPI(task) {
    return this.$http.patch('/api/tasks/' + task.id, { name: task.name, project_id: task.project_id });
  }

  deleteTaskAPI(taskid, projid) {
    return this.$http.delete('/api/tasks/' + taskid, { params: { project_id: projid }});
  }
}
