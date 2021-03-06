(function ()
{
    'use strict';

    angular.module('app.team')
        .controller('CreateEmployeeDialogController', CreateEmployeeDialogController);

    /** @ngInject */
    function CreateEmployeeDialogController($mdDialog)
    {
        var vm = this;



        // Methods
        vm.closeDialog = closeDialog;
        vm.saveEvent = saveEvent;


        /**
         * Save the event
         */
        function saveEvent()
        {
            var response = {
                employee: vm.employee
            };

            $mdDialog.hide(response);
        }


        /**
         * Close the dialog
         */
        function closeDialog()
        {
            $mdDialog.cancel();
        }
    }
})();
