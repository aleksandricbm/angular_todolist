export default class RegisterCtrl{
  constructor($scope, $location, Flash){
    $scope.$on('auth:registration-email-success', function(ev, user) {
      $("#regform divs").removeClass("has-danger");
      Flash.create('success', `<b>Well done!</b> Welcome You’re successfully registered!`)
    });

      $scope.$on('auth:registration-email-error', function(ev, reason) {
      $("#regform div").removeClass("has-danger");
      angular.forEach(reason.errors, function(value, index) {
        if (index =='full_messages') { return; }
        Flash.create('danger', value);
        $('#'+index).parent('div').addClass('has-danger');
      })
    });
  }
}
