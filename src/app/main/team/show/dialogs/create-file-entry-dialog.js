(function () {
    'use strict';

    angular.module('app.team').controller(
        'CreateFileEntryDialogController', CreateFileEntryDialogController);

    /** @ngInject */
    function CreateFileEntryDialogController($mdDialog, dialogData) {
        var vm = this;

        // Data
        vm.tags = angular.copy(dialogData.tags);

        // Methods
        vm.saveEvent = saveEvent;
        vm.closeDialog = closeDialog;
        vm.clearTag = clearTag;

        /**
         * Save the event
         */
        function saveEvent() {
            var response = {
                "entry": vm.entry.note,
                "created_by": {
                    "_id": 1,
                    "name": {
                        "first": "Nick",
                        "last": "Spitale",
                        "full": "Nick Spitale"
                    }
                },
                "created_at": moment()
            };
            if (vm.entry.tag) {
                response.tag = JSON.parse(vm.entry.tag);
            }

            $mdDialog.hide(response);
        }

        /**
         * Close the dialog
         */
        function closeDialog() {
            $mdDialog.cancel();
        }

        function clearTag() {
            vm.entry.tag = null;
        }

    }
})();
