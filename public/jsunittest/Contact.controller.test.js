describe("app", function () {
    beforeEach(module("app"));
    describe('controller: ContactController', function () {
        var ctrl, Contact, $scope;
     

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            Contacts = {
                query: function () { 
                   
                },
                save:function () {
                    $scope.result = '{"result":true}';
                },
                 update:function () {
                    $scope.result = '{"result":true}';
                },
                delete:function () {
                     $scope.result = '{"result":true}';
                }
              
            };

            spyOn(Contacts, 'query').and.returnValue('[{"id":1,"name":"aravind","email":"aravind.m@kgfsl.com","phone":"8807548039"}]'); // <----------- HERE

            ctrl = $controller('ContactController', { $scope: $scope, Contact: Contacts });
        }));

        it('Should call get all()', function () {
            console.log($scope.Contacts);     
            expect($scope.Contacts).toBe('[{"id":1,"name":"aravind","email":"aravind.m@kgfsl.com","phone":"8807548039"}]');
        });
        
        it('Should call create', function () {
            $scope.Contact = {"name":"reka","email":"reka.v@kgfsl.com","phone":"577888"}
            console.log($scope.result);
            $scope.saveContact($scope.Contact);
            expect($scope.result).toBe('{"result":true}');
        });
        
        it('Should call update', function () {
            $scope.Contact = {"id":1,"name":"reka","email":"reka.v@kgfsl.com","phone":"577888"};
            console.log($scope.result);
            $scope.updateContact($scope.Contact);
            expect($scope.result).toBe('{"result":true}');
        });
        
        it('Should call delete', function () {
            $scope.Contact = {"id":1};
           $scope.deleteContact($scope.Contact);
            expect($scope.result).toBe('{"result":true}');
        });
               
    });
});