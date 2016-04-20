(function () {
    'use strict';

    angular.module('app.core')
        .filter('duration', durationFilter)
        .filter('fromNow', fromNowFilter);

    function getMoment(date){
        if(moment.isMoment(date)){
            return date;
        }
        return moment(date);
    }

    /** @ngInject */
    function durationFilter() {
        return function (start, end) {

            var startMoment = moment(start);
            var endMoment = moment(end);

            return endMoment.diff(startMoment, 'hours', true);

        };
    }

    /** @ngInject */
    function fromNowFilter() {
        return function (input) {
            return getMoment(input).fromNow();
        };
    }

})();