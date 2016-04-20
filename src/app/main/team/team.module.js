(function ()
{
    'use strict';

    angular
        .module('app.team', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.team', {
                url    : '/team',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/team/team.html',
                        controller : 'TeamController as vm'
                    }
                },
                resolve: {
                    TeamData: function (msApi)
                    {
                        return msApi.resolve('team@get');
                    }
                }
            });

        // Api
        msApiProvider.register('team', ['app/data/team/team.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('team', {
            title    : 'Team',
            icon     : 'icon-account-multiple',
            state    : 'app.team',
            weight   : 1
        });


    }
})();