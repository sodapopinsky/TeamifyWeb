(function ()
{
    'use strict';

    angular
        .module('app.timecards')
        .controller('TimecardsController', TimecardsController);

    /** @ngInject */
    function TimecardsController(TimecardsData, ActiveUsersData, $filter)
    {
        var vm = this;

        //Data
        vm.timecards = TimecardsData.data;
        vm.report = "summary";
        vm.users = ActiveUsersData.data;

        //Methods
        vm.sumShiftDuration = sumShiftDuration;
        vm.selectedUserFilter = selectedUserFilter;
        vm.clearSelectedUser = clearSelectedUser;

        function sumShiftDuration(data) {
            var total = 0;
            _.forEach(
                data, function (value) {

                    total += $filter('duration')(value.clock_in,value.clock_out);
                });
            return total;
        };


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

    }
})();
