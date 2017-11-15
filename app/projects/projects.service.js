export default class ProjectsService{
  constructor($http){
    this.$http = $http;
  }

  createProjectAPI(proj){
    return this.$http.post('/api/v1/projects', { project: { name: proj }});
  }

  getListProjectsAPI() {
    return this.$http.get('/api/v1/projects');
  }

  editProjectAPI(proj) {
    return this.$http.patch('/api/v1/projects/' + proj.id, { project: { name: proj.name } } );
  }

  deleteProjectAPI(proj) {
    return this.$http.delete('/api/v1/projects/' + proj);
  }
}
