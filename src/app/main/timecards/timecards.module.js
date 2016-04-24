(function ()
{
    'use strict';

    angular
        .module('app.timecards', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.timecards', {
                url    : '/timecards',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/timecards/timecards.html',
                        controller : 'TimecardsController as vm'
                    }
                },
                resolve: {
                    TimecardsData: function (msApi)
                    {
                        return msApi.resolve('timecards@get');
                    },
                    ActiveUsersData: function (msApi)
                    {
                        return msApi.resolve('activeusers@get');
                    }
                }
            });

        // Api
        msApiProvider.register('activeusers', ['app/data/users/activeusers.json']);
        msApiProvider.register('timecards', ['app/data/timecards/timecards.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('timecards', {
            title    : 'Timecards',
            icon     : 'icon-clock',
            state    : 'app.timecards',
            weight   : 3
        });


    }
})();