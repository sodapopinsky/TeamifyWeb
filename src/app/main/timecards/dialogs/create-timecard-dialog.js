(function ()
{
    'use strict';

    angular.module('app.team')
        .controller('CreateTimecardDialogController', CreateTimecardDialogController);

    /** @ngInject */
    function CreateTimecardDialogController($mdDialog)
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
