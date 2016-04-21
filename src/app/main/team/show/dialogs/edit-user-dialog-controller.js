(function ()
{
    'use strict';

    angular.module('app.team')
        .controller('EditUserDialogController', EditUserDialogController);

    /** @ngInject */
    function EditUserDialogController($mdDialog, dialogData)
    {
        var vm = this;

        // Data
        vm.user = angular.copy(dialogData.user);

        // Methods
        vm.saveEvent = saveEvent;
        vm.closeDialog = closeDialog;

        /**
         * Save the event
         */
        function saveEvent()
        {
            var response = {
                user: vm.user
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
