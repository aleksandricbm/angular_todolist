export default class CommentsService{
  constructor($http){
    this.$http = $http;
  }

  createCommentAPI(params){
    return this.$http.post( process.env.API_URL + '/comments',  params );
  }

  getListCommentsAPI(projid, taskid){
    return this.$http.get( process.env.API_URL + '/comments', { params: { project_id: projid, task_id: taskid } } )
  }

  deleteCommentAPI(commid, projid, taskid) {
    return this.$http.delete( process.env.API_URL + '/comments/' + commid, { params: { project_id: projid, task_id: taskid }});
  }
}
