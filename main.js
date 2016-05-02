'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $filter) {
    console.log('mainCtrl!');

    $scope.products = [

        {
            id: 1,
            name: "The Parable of the Sower",
            author: "Octavia Butler",
            description: "Set in a future where government has all but collapsed, Parable of the Sower centers on a young woman named Lauren Olamina who possesses what Butler dubbed hyperempathy",
            amount: 5,
            category: "Science Fiction",
            checked: false
        }, {
            id: 2,
            name: "The Bluest Eye",
            author: "Toni Morrison",
            description: "The story is about a year in the life of a young black girl named Pecola who develops an inferiority complex due to her eye color and skin appearance.",
            amount: 4,
            category: "Biography",
            checked: false

        }, {
            id: 3,
            name: "Their Eyes Were Watching God",
            author: "Zora Neale Hurston",
            description: "The novel narrates main character Janie Crawford's ripening from a vibrant, but voiceless, teenage girl into a woman with her finger on the trigger of her own destiny.",
            amount: 9,
            category: "Fiction",
            checked: false

        }

    ];



    // $scope.addProduct = () => {
    //   $scope.products.push($scope.newProduct);
    //   $scope.newProduct = {};
    // };

    $scope.addProduct = function() {
        $scope.products.push({
            id: $scope.new_id,
            name: $scope.new_name,
            author: $scope.new_author,
            description: $scope.new_description,
            amount: $scope.new_amount,
            category: $scope.new_category
        });
        $scope.new_id = "";
        $scope.new_name = "";
        $scope.new_author = "";
        $scope.new_description = "";
        $scope.new_amount = "";
        $scope.new_category = "";
    };

    $scope.checkedIndexes = [];

    $scope.checkedIndex = function(product) {
        if ($scope.checkedIndexes.indexOf(product) === -1) {
            $scope.checkedIndexes.push(product);
        } else {
            $scope.checkedIndexes.splice($scope.checkedIndexes.indexOf(product), 1);
        }
    }

    $scope.selectedProducts = function() {
        return $filter('filter')($scope.products, {
            checked: true
        });
    };

    $scope.remove = function(index) {
        angular.forEach($scope.checkedIndexes, function(value, index) {
            var index = $scope.products.indexOf(value);
            $scope.products.splice($scope.products.indexOf(value), 1);
        });
        $scope.checkedIndexes = [];
    };


});
