(function ()
{
    'use strict';

    angular
        .module('app.team')
        .controller('TeamShowController', TeamShowController);

    /** @ngInject */
    function TeamShowController(TeamData, $mdDialog, $document)
    {
        var vm = this;

        //Data
        vm.team = TeamData.data;

        // Filter Models
        vm.status = "Active";
        vm.searchFilter = '';

        // Methods
        vm.createEmployee = createEmployee;

        function createEmployee(e)
        {
            var dialogData = {
                type: "test"
            };

            $mdDialog.show({
                controller         : 'CreateEmployeeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/team/dialogs/create-employee-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true,
                locals             : {
                    dialogData: dialogData
                }
            }).then(function (response)
            {
                // Add new
                vm.team.push({
                    name: response.employee.name,
                    status: 'Active'
                });
            });
        };


    }
})();
