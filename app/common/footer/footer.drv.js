angular.module('ct.common.footer')
  .directive('ctFooter', ctFooterDirective);

function ctFooterDirective() {

    return {
        restrict: 'AE',
        templateUrl: 'common/footer/footer.tmpl.html',
        replace: true,
        scope: {},
        link: link,
        controller: FooterController,
        controllerAs: 'vm',
        bindToController: true
    };
    function link( scope, element, attributes, vm ) {}
}

FooterController.$inject = [ '$scope' ];

function FooterController( $scope ) {
    var vm = this;
}
