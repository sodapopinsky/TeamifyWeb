(function ()
{
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(DashboardData)
    {
        var vm = this;

        vm.colors = ['blue-bg', 'blue-grey-bg', 'orange-bg', 'pink-bg', 'purple-bg'];

        // Widgets
        vm.widgets = {
            activity: {
                title: 'Activity',
                data: DashboardData.data.activity
            },
            labor: {
                title: 'Labor Summary',
                data: DashboardData.data.labor
            },
            timecards: {
                title: 'Timecards',
                data: DashboardData.data.timecards
            }
        };

    }
})();
