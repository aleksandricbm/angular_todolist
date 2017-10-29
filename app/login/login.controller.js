export default class LoginCtrl{
  constructor($rootScope, $location){
    $rootScope.$on('auth:login-success', function(ev, user) {
      $location.path('/projects');
    });

      $rootScope.$on('auth:login-error', function(ev, reason) {
      angular.forEach(reason.errors, function(value, index) {
        alert('error');
        // FlashService.Error(response.message);
      })
    });
  }
}
