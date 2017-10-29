export default class RegisterCtrl{
  constructor($rootScope, $location){

    $rootScope.$on('auth:registration-email-success', function(ev, user) {
      $location.path('/projects')
    });

      $rootScope.$on('auth:registration-email-error', function(ev, reason) {
      angular.forEach(reason.errors, function(value, index) {
        alert('error');
      })
    });
  }
}
