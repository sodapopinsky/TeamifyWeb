(function ()
{
    'use strict';

    angular
        .module('app.team')
        .controller('TeamController', TeamController);

    /** @ngInject */
    function TeamController(TeamData, $mdDialog, $document, $scope)
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
            $mdDialog.show({
                controller         : 'CreateEmployeeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/team/dialogs/create-employee-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true
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
