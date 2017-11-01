export default class ProjectsService{
  constructor($http){
    this.$http = $http;
  }

  createProjectAPI(proj){
    return this.$http.post('/api/projects', JSON.stringify({ name: proj }));
  }

  getListProjectsAPI() {
    return this.$http.get('/api/projects');
  }

  // getTasksListAPI(proj) {
  //   return this.$http.get('/api/tasks', { params: { project: proj }})
  // }
}
