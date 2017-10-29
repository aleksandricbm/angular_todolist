routes.$inject = ['$stateProvider','$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.tpl.html',
      data: {
        css: 'app/login/login.css'
      },
      resolve: {
        auth: function ($auth, $state) {
            return $auth.validateUser()
            .then(function(){
                $state.go('projects');
              })
            .catch(function(){console.log('not login')});
          }
        },
      controller: 'LoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'app/register/register.tpl.html',
      data: {
        css: 'app/login/login.css'
      },
      controller: 'RegisterCtrl'
    })
    .state('projects', {
      resolve: {
        auth: function ($auth, $state) {
            return $auth.validateUser().catch(function(err){
                $state.go('login');
              });
          }
        },
      url: '/projects',
      templateUrl: 'app/projects/projects.tpl.html',
      controller: 'ProjectsCtrl'
    })
    $urlRouterProvider.otherwise('/projects');
}
