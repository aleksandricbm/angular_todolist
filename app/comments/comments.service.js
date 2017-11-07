export default class CommentsService{
  constructor($http){
    this.$http = $http;
  }

  createComment(data){
    return this.$http.post('/api/comments',  data );
  }
}
