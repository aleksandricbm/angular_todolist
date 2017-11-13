export default class CommentsDirective {
  constructor($parse) {
    this.templateUrl = 'app/comments/comments.tpl.html';
    this.restrict = 'EA';
    this.$parse = $parse;
    this.scope = {
      task: '=',
      projid: '=',
      show: '='
    };
    this.controller = 'CommentsCtrl';
    this.controllerAs = 'comctrl';
    this.link = function(scope, element, attributes) {
      scope.showModal = function (visible, elem) {
        if (!elem) elem = element;
          $('#myModal').modal("show");
      }
      //Watch for changes to the modal-visible attribute
      scope.$watch(attributes.modalShow, function (newValue, oldValue) {
        scope.showModal(newValue, attributes.$$element);
      });
    };
  }
}
