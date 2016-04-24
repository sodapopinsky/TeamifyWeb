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
                        controller : 'TeamController as team'
                    }
                },
                resolve: {
                    TeamData: function (msApi)
                    {
                        return msApi.resolve('team@get');
                    }
                }
            })
            .state('app.team.show', {
                url    : '/:_id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/team/show/team-show.html',
                        controller : 'TeamShowController as vm'
                    }
                },
                resolve: {
                    TeamMemberData: function ($stateParams, TeamService)
                    {
                        return TeamService.getMemberData($stateParams._id);
                    }
                }
            });

        // Api
        msApiProvider.register('team', ['app/data/team/team.json']);
        msApiProvider.register('team.show', ['app/data/team/show/:id.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('team', {
            title    : 'Team',
            icon     : 'icon-account-multiple',
            state    : 'app.team',
            weight   : 2
        });

    }
})();