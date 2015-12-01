angular.module('ct.common.header')
  .directive('ctHeader', ctHeaderDirective );

function ctHeaderDirective() {

    return {
        restrict: 'AE',
        templateUrl: 'common/header/header.tmpl.html',
        replace: true,
        scope: {},
        link: link,
        controller: HeaderController,
        controllerAs: 'vm',
        bindToController: true
    };
    function link( scope, element, attributes, vm ) {}
}

HeaderController.$inject = [ '$scope' ];

function HeaderController( $scope ) {
    var vm = this;
}
