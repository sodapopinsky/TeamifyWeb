(function ()
{
    'use strict';

    angular
        .module('app.team')
        .factory('TeamService', TeamService);

    /** @ngInject */
    function TeamService($q, msApi)
    {
        var service = {
            getMemberData: getMemberData
        };

        /**
         * Get member data from the server
         *
         * @param memberId
         * @returns {*}
         */
        function getMemberData(memberId)
        {
            // Create a new deferred object
            var deferred = $q.defer();

            msApi.request('team.show@get', {id: memberId},

                // SUCCESS
                function (response)
                {
                    // Attach the data
                    service.data = response.data;

                    // Resolve the promise
                    deferred.resolve(response);
                },

                // ERROR
                function (response)
                {
                    // Reject the promise
                    deferred.reject(response);
                }
            );

            return deferred.promise;
        }

        return service;
    }
})();