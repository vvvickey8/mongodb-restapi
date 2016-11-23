(function () {
    'use strict';
    var ContactService = angular.module('app');
    ContactService.factory('Contact', ['$resource',
    function ($resource) {
        
        return $resource('contacts/:id', {id:'@id'},
         {
             save:{method:"POST"},
             update:{method:"PUT"},
             remove:{method:"DELETE"}
            
        });
    }
    ]);
})();