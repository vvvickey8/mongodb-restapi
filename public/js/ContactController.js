(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope','Contact']; 
console.log("I am from ContactController");
    function ContactController($scope, Contact) {
      
    	
         $scope.Contacts = Contact.query();
         
         
         
        $scope.result = "";
        $scope.saveContact = function() {
           // alert(JSON.stringify($scope.Contact)+"<-----------Test"+Contact.name);
            // $scope.Contact.name = Contacts.name;
            // $scope.Contacts.email=Contact.email;
            // $scope.Contacts.phone=Contact.phone;
             Contact.save($scope.Contact,function(success){
             // alert(JSON.stringify(success));
              $scope.result = JSON.stringify(success);
              window.location.href = '#/';
             },function(error){
               ////alert(JSON.stringify(error));
             });
             //window.location.href = '#/';
             
        }
        
        $scope.updateContact = function(){
            //alert(JSON.stringify($scope.Contact)+"<-----------Test");
           Contact.update($scope.Contact,function(success){
                //alert(JSON.stringify(success));
                $scope.result = JSON.stringify(success);
                window.location.href = '#/'; 
            },function(error){
                
            });
            //window.location.href = '#/';
        }
        
        
          
          
        $scope.deleteContact = function(){
            //alert(JSON.stringify($scope.Contact)+"<-----------Test");
            Contact.delete($scope.Contact,function(success){
            //alert(JSON.stringify(success));
            $scope.result = JSON.stringify(success);
                window.location.href = '#/';
            },function(error){
                
            });
           
        }
    
}



 
})();