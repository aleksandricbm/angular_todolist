import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookie';
import ngtokenauth from 'ng-token-auth';
import ngFileUpload from 'ng-file-upload';
import LoginCtrl from './login/login.controller';
import RegisterCtrl from './register/register.controller';
import ProjectsModule from './projects/projects.module';
import TasksModule from './tasks/tasks.module';
import CommentsModule from './comments/comments.module';
import routes from './app.routes';
import ngFlash from 'angular-flash-alert'

angular.module('app', [
	uirouter,
  ngAnimate,
  ngCookies,
  ngtokenauth,
  ngFlash,
  ngFileUpload,
  'moment-picker',
  ProjectsModule.name,
  TasksModule.name,
  CommentsModule.name
  ])
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .config(routes)
	.config(function($authProvider) {
    $authProvider.configure({
      apiUrl:                  '/api',
      tokenValidationPath:     '/auth/validate_token',
      signOutUrl:              '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth',
      confirmationSuccessUrl:  window.location.href,
      passwordResetPath:       '/auth/password',
      passwordUpdatePath:      '/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         '/auth/sign_in',
      storage:                 'cookies',
      forceValidateToken:      false,
      validateOnPageLoad:      true,
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type":   "Bearer",
        "client":       "{{ clientId }}",
        "expiry":       "{{ expiry }}",
        "uid":          "{{ uid }}"
      },
      cookieOps: {
        path: "/",
        expires: 9999,
        expirationUnit: 'days',
        secure: false,
        domain: '192.168.0.108'
      },
      createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
	})
  .run(function($rootScope, $state, Flash){
    Flash.clear();
    $rootScope.$on('auth:logout-success', function(ev) {
      $state.go('login');
    });
  });
