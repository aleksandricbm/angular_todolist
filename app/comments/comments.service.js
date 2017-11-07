export default class CommentsService{
  constructor($http){
    this.$http = $http;
  }

  createCommentAPI(data){
    return this.$http.post('/api/comments',  data );
  }

  getListCommentsAPI(projid, taskid){
    return this.$http.get('/api/comments', { params: { project_id: projid, task_id: taskid } } )
  }

  deleteCommentAPI(commid, projid, taskid) {
    return this.$http.delete('/api/comments/' + commid, { params: { project_id: projid, task_id: taskid }});
  }
}
