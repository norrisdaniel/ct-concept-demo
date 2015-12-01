angular.module('ct')
  .config(Routes);
Routes.$inject  = [ '$stateProvider','$urlRouterProvider','APP_PROPERTIES'];
function Routes($stateProvider,$urlRouterProvider,APP_PROPERTIES) {
    $urlRouterProvider.otherwise(APP_PROPERTIES['state.base.path'])
}
