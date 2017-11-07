export default class CommentsCtrl{
  constructor($scope, $http, CommentsService, Upload){
    this.comments = [];
    this.service = CommentsService;
    this.$scope = $scope;
    this.Upload = Upload;
    this.form = {};

    console.log('constructor Comments');
  }

  saveCommentForm(model, form){
    this.Upload.base64DataUrl(model.file_upload).then( function (url){
      var params = {
        project_id: this.$scope.projid,
        task_id: this.$scope.taskid,
        comments: model.comment,
        file: url
      };
      this.service.createCommentAPI(params)
        .then(function(response){
          this.comments.push(response.data);
        }.bind(this));
    }.bind(this));
  }

  getListComments(){
    this.service.getListCommentsAPI(this.$scope.projid, this.$scope.taskid)
      .then(function(response){
        console.log("old="+this.comments)
        this.comments = response.data;
        console.log("new="+this.comments)
      }.bind(this));
  }

  deleteComment(comment){
    this.service.deleteCommentAPI(comment.id, this.$scope.projid, this.$scope.taskid)
      .then(function(response) {
        this.comments = this.comments.filter(function( obj ) {
            return obj.id !== comment.id;
        });
      }.bind(this));
  }
}
