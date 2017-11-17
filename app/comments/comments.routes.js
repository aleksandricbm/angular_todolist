routes.$inject = ['$stateProvider','$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('comments', {
      resolve: {
        auth: function ($auth, $state) {
            return $auth.validateUser().catch(function(err){
                $state.go('login');
              });
          }
        },
      controller: 'CommentsCtrl',
      controllerAs: 'comctrl'
    })
  };
