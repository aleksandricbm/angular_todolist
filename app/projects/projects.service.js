export default class ProjectsService{
  constructor($http){
    this.$http = $http;
  }

  createProjectAPI(proj){
    return this.$http.post( process.env.API_URL + '/projects', { project: { name: proj }});
  }

  getListProjectsAPI() {
    return this.$http.get( process.env.API_URL + '/projects');
  }

  editProjectAPI(proj) {
    return this.$http.patch( process.env.API_URL + '/projects/' + proj.id, { project: { name: proj.name } } );
  }

  deleteProjectAPI(proj) {
    return this.$http.delete( process.env.API_URL + '/projects/' + proj);
  }
}
