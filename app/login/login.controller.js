export default class LoginCtrl{
  constructor($rootScope, $location, Flash){
    $rootScope.$on('auth:login-success', function(ev, user) {
      $location.path('/projects');
      Flash.create('success', `Welcome ${user.email}`)
    });

      $rootScope.$on('auth:login-error', function(ev, reason) {
      $("#loginform div").removeClass("has-danger");
      angular.forEach(reason.errors, function(value, index) {
        if (index =='full_messages') { return; }
        Flash.create('danger', value);
        $('#loginform').addClass('has-danger');
      })
    });
  }
}
