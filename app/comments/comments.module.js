import angular from 'angular';
import uirouter from 'angular-ui-router';
import CommentsCtrl from './comments.controller';
import CommentsRoutes from './comments.routes';
import CommentsDirective from './comments.directive'
import CommentsService from './comments.service'

export default angular.module('app.comments',[uirouter])
  .controller('CommentsCtrl', CommentsCtrl)
  .config(CommentsRoutes)
  .directive('commentsList', [() => new CommentsDirective()])
  .service('CommentsService', CommentsService)
