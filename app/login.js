/**
 * Created by Singh on 2/16/17.
 */

var app = angular.module('loginApp',[]);

app.controller('Register',['$scope',function ($scope) {

    //$scope.user = {firstName:"",email:"", password:""}

        $scope.regUser = function () {
            console.log(console.log($scope.firstName));
        }


        $scope.regist = function () {
            //console.log(abc);

              console.log("saveRegistration Method is calling");
                  //console.log(registration);

                  var PostDatadata = { fname: $scope.firstName, Password: $scope.password, Email: $scope.email };

                  $http.post(serviceBase + 'api/Signup', PostDatadata).success(function (successData) {
                      console.log("Api Success ");
                      console.log(successData);
                      deferred.resolve(successData);
                  }).error(function (data, status, headers, config) {
                      var ErrorData = { data: data, status: status, headers: headers, config: config }
                      deferred.reject(ErrorData);
                  });
        }
}])




app.controller('Login',['$scope',function ($scope) {

    //$scope.user = {firstName:"",email:"", password:""}

        $scope.regUser = function () {
            console.log(console.log($scope.firstName));
        }

        $scope.redirect = function () {
            $location.path('/app/sign');
        }


        $scope.login = function () {
            //console.log(abc);

              console.log("saveRegistration Method is calling");
                  //console.log(registration);

                  var PostDatadata = { fname: $scope.userName, Password: $scope.password };

                  $http.post(serviceBase + 'api/Signup', PostDatadata).success(function (successData) {
                      console.log("Api Success ");
                      console.log(successData);
                      deferred.resolve(successData);
                  }).error(function (data, status, headers, config) {
                      var ErrorData = { data: data, status: status, headers: headers, config: config }
                      deferred.reject(ErrorData);
                  });
        }
}])






app.controller('ForgotPassword',['$scope',function ($scope) {

    //$scope.user = {firstName:"",email:"", password:""}






        $scope.submit_user_name = function () {
            //console.log(abc);

              console.log("saveRegistration Method is calling");
                  //console.log(registration);

                  var PostDatadata = { user_name: $scope.user_Name };

                  $http.post(serviceBase + 'api/Signup', PostDatadata).success(function (successData) {
                      console.log("Api Success ");
                      console.log(successData);
                      deferred.resolve(successData);
                  }).error(function (data, status, headers, config) {
                      var ErrorData = { data: data, status: status, headers: headers, config: config }
                      deferred.reject(ErrorData);
                  });
        }
}])






;