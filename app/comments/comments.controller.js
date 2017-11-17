export default class CommentsCtrl{
  constructor($scope, $http, CommentsService, Upload, Flash){
    this.comments = [];
    this.service = CommentsService;
    this.$scope = $scope;
    this.Upload = Upload;
    this.Flash = Flash;
    this.form = {};
  }

  saveCommentForm(model, form){
    this.Upload.base64DataUrl(model.file_upload).then( function (url){
      var params = {
        project_id: this.$scope.projid,
        task_id: this.$scope.task.id,
        data: {
          comment: model.comment,
          file: url
        }
      };
      this.service.createCommentAPI(params)
        .then(function(response){
          this.comments.push(response.data);
          this.$scope.task.comments_count+=1;
        }.bind(this))
        .catch(function(response){
        this.Flash.create('danger', response.data.comment);
      }.bind(this));
    }.bind(this));
  }

  getListComments(projid, taskid){
    this.service.getListCommentsAPI(projid, taskid)
      .then(function(response){
        this.comments = response.data;
      }.bind(this));
  }

  deleteComment(comment){
    this.service.deleteCommentAPI(comment.id, this.$scope.projid, this.$scope.task.id)
      .then(function(response) {
        this.comments = this.comments.filter(function( obj ) {
            return obj.id !== comment.id;
        });
        this.$scope.task.comments_count-=1;
      }.bind(this));
  }
  closeModalComment(){
    this.$scope.show = false;
  }
}
