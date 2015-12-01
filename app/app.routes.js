(function(angular){

    /************************************************
     *  @module:    ct
     *  @summary:   $stateProvider configuration or application routes
     ***********************************************/

    angular.module('ct')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider','$urlRouterProvider','APP_PROPERTIES'];
    
    function RouterConfig ($stateProvider,$urlRouterProvider,APP_PROPERTIES){
        $stateProvider
          .state('trade',{
              url:APP_PROPERTIES["state.base.path"],
              templateUrl:'core/trade/trade.abs.tmpl.html'
          });
        $urlRouterProvider.otherwise(APP_PROPERTIES["state.base.path"]);
    }
    
})(angular);


