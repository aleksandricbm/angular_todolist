routes.$inject = ['$stateProvider','$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.tpl.html',
      data: {
        css: 'app/login/login.css'
      },
      controller: 'LoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'app/register/register.tpl.html',
      data: {
        css: 'app/login/login.css'
      },
      resolve: {
        auth: function ($auth, $state) {
            return $auth.validateUser()
            .then(function(){
                $state.go('projects');
              })
            .catch(function(){});
          }
        },
      controller: 'RegisterCtrl'
    })
    $urlRouterProvider.otherwise('/');
}
