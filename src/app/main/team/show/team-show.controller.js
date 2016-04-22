(function () {
    'use strict';

    angular.module('app.team').controller('TeamShowController', TeamShowController);

    /** @ngInject */
    function TeamShowController(TeamMemberData, $mdDialog, $document) {
        var vm = this;

        //Data
        vm.user = TeamMemberData.data.user;

        //Employee file tab tag filter
        vm.selectedTag = "all";
        vm.tags = ["assertive", "royal", "positive", "energized", "calm", "balanced"];

        //Methods
        vm.editUser = editUser;

        // Widgets
        vm.widgets = {
            information: {
                title: 'Information'
            },
            activity: {
                title: 'Recent Activity',
                data: TeamMemberData.data.activity
            }
        };


        function editUser(e) {

            var dialogData = {
                user: vm.user
            };

            $mdDialog.show(
                {
                    controller: 'EditUserDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/main/team/show/dialogs/edit-user-dialog.html',
                    parent: angular.element($document.body),
                    targetEvent: e,
                    clickOutsideToClose: true,
                    locals: {
                        dialogData: dialogData
                    }
                }).then(
                function (response) {
                    console.log(response);
                    vm.user = response.user;
                });

        }


    }
})();
