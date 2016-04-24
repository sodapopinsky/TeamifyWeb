(function () {
    'use strict';

    angular.module('app.team').controller('TeamShowController', TeamShowController);

    /** @ngInject */
    function TeamShowController(TeamMemberData, $mdDialog, $document, $scope) {
        var vm = this;

        //Data
        vm.user = TeamMemberData.data.user;
        vm.tags = [{
            "_id": "1",
            "color": "assertive",
            "title": "Policy Violation"
        },
            {
                "_id": "2",
                "color": "balanced",
                "title": "Good Job!"
            },
            {
                "_id": "3",
                "color": "energized",
                "title": "Late For Shift"
            },
            {
                "_id": "4",
                "color": "calm",
                "title": "Review"
            }];


        //Methods
        vm.editUser = editUser;
        vm.terminateUser = terminateUser;
        vm.createFileEntry = createFileEntry;
        vm.clearTagFilter = clearTag;
        vm.tagFilter = tagFilter;

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
                    vm.user = response.user;
                });
        }

        function terminateUser(ev) {

            var confirm = $mdDialog.confirm()
                .title('Terminate Employee?')
                .textContent('You can re-activate them at any time.')
                .ariaLabel('Terminate Employee?')
                .targetEvent(ev)
                .ok('Confirm')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
                vm.user.status = 'Inactive';
            });
        }



        function createFileEntry(e) {
            var dialogData = {
                tags: vm.tags,
                user: vm.user
            };

            $mdDialog.show(
                {
                    controller: 'CreateFileEntryDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/main/team/show/dialogs/create-file-entry-dialog.html',
                    parent: angular.element($document.body),
                    targetEvent: e,
                    clickOutsideToClose: true,
                    locals: {
                        dialogData: dialogData
                    }
                }).then(
                function (response) {
                    vm.user.file.unshift(response);

                    vm.widgets.activity.data.unshift({
                        "type": "note",
                        "header": "A note has been placed in the file of " + vm.user.name.full,
                        "entry": response.entry,
                        "created_at": response.created_at,
                        "created_by": response.created_by
                    });

                });

        }

        function clearTag(){
            vm.selectedTag = null;
        }

        function tagFilter(entry)
        {
            if(!vm.selectedTag){
                return true;
            }
            if(!entry.tag){
                return false;
            }
            if(entry.tag._id == vm.selectedTag){
                return true;
            }
            return false;
        }

    }
})();
