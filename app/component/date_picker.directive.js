export default class DatePickerDirective {
  constructor() {
    this.templateUrl = 'app/component/date_picker.tpl.html';
    this.restrict = 'EA';
    this.scope = {
        task: '=',
        showdatepicker: '='
    };
    this.transclude = true;
    this.controller = 'DatePickerCtrl';
    this.controllerAs = 'datepicker';
    this.link = function(scope, element, attributes) {
      scope.showModal = function (visible, elem) {
        if (!elem) elem = element;
          $('#myModalDatePicker').modal("show");
      }
      //Watch for changes to the modal-visible attribute
      scope.$watch(attributes.modalShow, function (newValue, oldValue) {
        scope.showModal(newValue, attributes.$$element);
      });
    };
  }
}
