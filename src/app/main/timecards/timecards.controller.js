(function ()
{
    'use strict';

    angular
        .module('app.timecards')
        .controller('TimecardsController', TimecardsController);

    /** @ngInject */
    function TimecardsController(TimecardsData, ActiveUsersData, $filter, $mdDialog)
    {
        var vm = this;

        //Data
        vm.timecards = TimecardsData.data;
        vm.report = "summary";
        vm.users = ActiveUsersData.data;

        vm.card = {due:null};
        //Methods
        vm.createTimecard = createTimecard;
        vm.sumShiftDuration = sumShiftDuration;
        vm.selectedUserFilter = selectedUserFilter;
        vm.clearSelectedUser = clearSelectedUser;
        vm.totalHours = totalHours;

        function createTimecard(e)
        {
            $mdDialog.show({
                controller         : 'CreateTimecardDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/timecards/dialogs/create-timecard-dialog.html',
                parent             : angular.element(document.body),
                targetEvent        : e,
                clickOutsideToClose: true
            }).then(function (response)
            {
            });
        }

        function sumShiftDuration(data) {
            var total = 0;
            _.forEach(
                data, function (value) {
                    total += $filter('duration')(value.clock_in,value.clock_out);
                });
            return total;
        }

        function selectedUserFilter(timecard)
        {
            if(!vm.selectedUser){
                return true;
            }

            if(timecard.user._id == vm.selectedUser){
                return true;
            }
            return false;
        }

        function clearSelectedUser(){
            vm.selectedUser = null;
        }

        function totalHours() {
            var total = 0;
            _.forEach(
                vm.timecards, function (value) {
                    total += $filter('duration')(value.clock_in,value.clock_out);
                });
            return total;
        };


    }
})();
