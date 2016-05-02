'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
  console.log('mainCtrl!');

    $scope.products = [
      {
        "name": "The Parable of the Sower",
        "author": "Octavia Butler",
        "description":"Set in a future where government has all but collapsed, Parable of the Sower centers on a young woman named Lauren Olamina who possesses what Butler dubbed hyperempathy",
        "price": "5",
        "category": "Science Fiction"
      },
      {
        "name": "The Bluest Eye",
        "author": "Toni Morrison",
        "description": "The story is about a year in the life of a young black girl named Pecola who develops an inferiority complex due to her eye color and skin appearance.",
        "price": "3",
        "category": "Biography"
      },
      {
        "name": "Their Eyes Were Watching God",
        "author": "Zora Neale Hurston",
        "description": "The novel narrates main character Janie Crawford's ripening from a vibrant, but voiceless, teenage girl into a woman with her finger on the trigger of her own destiny.",
        "price": "8",
        "category": "Fiction"
      }

];
    $scope.addProduct = () => {
      $scope.products.push($scope.newProduct);
      $scope.newProduct = {};
    };
    $scope.removeProduct = product => {
      $scope.products.push($scope.newProduct);
      $scope.newProduct = {};
      $scope.products.splice(index,1);
    };
});
