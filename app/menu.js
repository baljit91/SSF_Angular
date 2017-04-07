/**
 * Created by Singh on 3/4/17.
 */


        var app = angular.module('confusionApp',[]);


        app.controller('menuController', ['$scope','$http',function($scope, $http) {




        //
        //     $http({
        //     method: 'jsonp',
        //     url: 'https://lila55.pythonanywhere.com/feedme/filter_api_test',
        //         params: {
        //     format: 'jsonp',
        //     callback: 'JSON_CALLBACK'
        // }
        // }).then(function(response){
        //     // With the data succesfully returned, call our callback
        //         alert(response.data);
        //     $scope.incoming = response.data;
        //    // callbackFunc(data);
        // })







            // var url = 'https://lila55.pythonanywhere.com/feedme/filter_api_test';
            //     $http({
            //         method: 'JSONP',
            //         url: url,
            //          params: {
            //             format: 'jsonp',
            //             name: 'Super Hero',
            //             callback: 'JSON_CALLBACK'
            //     }
            //     }).then(function(response){
            // // With the data succesfully returned, call our callback
            //      alert(response.data);
            //  $scope.incoming = response.data;
            // // callbackFunc(data);
            // });
            $http.get('http://lila55.pythonanywhere.com/feedme/filter_api_test')
                .success(function(response) {
            console.log("Scessssss");
            console.log(response);
            });












                           $scope.dishes=[
                         {
                           name:'Uthapizza',
                           image: 'images/uthapizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:' Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                           category: 'app',
                           label:'',
                           price:'1.99',
                           description:'a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'images/vadonut.png',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:' is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Paneer Cake',
                           image: 'images/elaicheesecake.png',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:' with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                        ];

            $scope.data = [];
               $scope.data = $scope.dishes;


         // $scope.chkDishes = function(id){
         //      var match = false;
         //      for(var i=0 ; i < $scope.data.length; i++) {
         //        if($scope.data[i].category == id){
         //          match = true;
         //          break;
         //        }
         //      }
         //      return match;
         //  }












            $scope.sync = function(bool, item){
                if($scope.data.length == $scope.dishes.length && bool == true){
                    $scope.data = [];
                }
                 if(bool){
                // add item
                     for(var i=0 ; i < $scope.dishes.length; i++) {
                         if($scope.dishes[i].category == item){
                          $scope.data.push($scope.dishes[i]);
                       }
                     }


                } else {
                // remove item
                 for(var i=0 ; i < $scope.data.length; i++) {
                  if($scope.data[i].category == item){
                    $scope.data.splice(i,1);
                   }
                }
                if($scope.data.length == 0){
                        $scope.data = $scope.dishes;
                    }
                }
            };


        }]);
