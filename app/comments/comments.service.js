export default class CommentsService{
  constructor($http){
    this.$http = $http;
  }

  createCommentAPI(params){
    return this.$http.post('/api/v1/comments',  params );
  }

  getListCommentsAPI(projid, taskid){
    return this.$http.get('/api/v1/comments', { params: { project_id: projid, task_id: taskid } } )
  }

  deleteCommentAPI(commid, projid, taskid) {
    return this.$http.delete('/api/v1/comments/' + commid, { params: { project_id: projid, task_id: taskid }});
  }
}
