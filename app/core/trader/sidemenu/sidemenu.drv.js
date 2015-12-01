angular.module('ct.trader.sidemenu')
  .directive('ctTraderSidemenu', traderSidemenu);

function traderSidemenu() {

    return {
        restrict: 'EA',
        templateUrl: 'core/trader/sidemenu/sidemenu.tmpl.html',
        replace: true,
        scope: {},
        link: link,
        controller: TraderSidemenuController,
        controllerAs: 'vm',
        bindToController: true
    };

    function link( scope, element, attributes, vm ) {}

}

TraderSidemenuController.$inject = [ '$scope' ];

function TraderSidemenuController( $scope ) {
    var vm = this;
}