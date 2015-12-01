(function(angular){

    /************************************************
     *  @module:    
     *  @summary:   
     ***********************************************/

    angular.module('ct.trade.confirmation')
        .directive('ctTradeConfirmation',TradeConfirmation);
    
    function TradeConfirmation (){
        return {
            restrict:'EA',
            templateUrl:'core/trade/confirmation/confirmation.tmpl.html',
            controller:TradeConfirmationCtrl,
            controllerAs:'vm',
            bindToController:true,
            scope:true,
            link:link
        };
        
        function link(scope,element,attrs,vm){


        }
    }

    TradeConfirmationCtrl.$inject = ['$scope'];
    
    function TradeConfirmationCtrl($scope){
        var vm = this;
       // some logic handle select here
        componentHandler.upgradeAllRegistered();
        activate();
        function activate (){


            return null;
        }
        
        
    }
    
})(angular);