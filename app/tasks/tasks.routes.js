routes.$inject = ['$stateProvider','$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tasks', {
      resolve: {
        auth: function ($auth, $state) {
            return $auth.validateUser().catch(function(err){
                $state.go('login');
              });
          }
        },
      // url: '/projects',
      // templateUrl: 'app/projects/projects.tpl.html',
      controller: 'TasksCtrl',
      controllerAs: 'tskCtrl'
    })
  };
