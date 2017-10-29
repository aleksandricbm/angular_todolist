import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookie';
import ngtokenauth from 'ng-token-auth';
import LoginCtrl from './login/login.controller';
import RegisterCtrl from './register/register.controller';
import ProjectsCtrl from './projects/projects.controller';
import routes from './app.routes';
angular.module('app', [
	uirouter,
  ngAnimate,
  ngCookies,
  ngtokenauth
  ])

  /** @ngInject */
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('ProjectsCtrl', ProjectsCtrl)
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
      proxyIf:                 function() { return false; },
      proxyUrl:                '/proxy',
      omniauthWindowType:      'sameWindow',
      authProviderPaths: {
        github:   '/auth/github',
        facebook: '/auth/facebook',
        google:   '/auth/google'
      },
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
        domain: 'localhost'
      },
      createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
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
  .run(function($rootScope, $state){
    $rootScope.$on('auth:logout-success', function(ev) {
      $state.go('login');
    });
  });
