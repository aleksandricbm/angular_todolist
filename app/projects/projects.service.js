export default class ProjectsService{
  constructor($http){
    this.$http = $http;
  }

  createProjectAPI(proj){
    return this.$http.post('/api/projects', {params: { name: proj }});
  }

  getListProjectsAPI() {
    return this.$http.get('/api/projects');
  }

  editProjectAPI(proj) {
    return this.$http.patch('/api/projects/' + proj.id, {name: proj.name});
  }

  deleteProjectAPI(proj) {
    return this.$http.delete('/api/projects/' + proj);
  }
}
