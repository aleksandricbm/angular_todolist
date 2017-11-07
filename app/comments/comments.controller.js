export default class CommentsCtrl{
  constructor($scope, $http, CommentsService, Upload){
    this.tasks = [];
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
      this.service.createComment(params);
    }.bind(this));

  }
}
