'use strict'

var myApp = angular.module("myApp", []);

myApp.controller("itemController", function($scope){
  var gems = [
  {
    name: "Flower",
    dimensions: "2400 x 2400",
    description: "A colorful flower melting between dimensions.",
    canPurchase: true,
    images: [{
      full: "images/1.jpg",
      thumb: "images/1thumb.jpg",
    }],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
  },
  {
    name: "Highway",
    dimensions: "1080 x 1080",
    description: "Don't trip and drive.",
    canPurchase: true,
    images: [{
      full: "images/2.jpg",
      thumb: "images/2thumb.jpg",
    },],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
  },
  {
    name: "MCloud",
    dimensions: "720 x 1280",
    description: "Use boost to chase!",
    canPurchase: true,
    images: [{
      full: "images/3.png",
      thumb: "images/3thumb.png",
    },],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
  },
  {
    name: "Ocean Web",
    dimensions: "2500 x 2500",
    description: "Chruning waters.",
    canPurchase: true,
    images: [{
      full: "images/4.jpg",
      thumb: "images/4thumb.jpg",
    },],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
  },
  {
    name: "Modern Technology",
    dimensions: "1675 x 2088",
    description: "Newfangled devices make for better quality of life.",
    canPurchase: true,
    images: [{
      full: "images/5.png",
      thumb: "images/5thumb.png",
    },],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
  },

  {
    name: "Astro-Naught",
    dimensions: "1920 x 1200",
    description: "In space no one can hear you meme.",
    canPurchase: true,
    images: [{
      full: "images/6.jpg",
      thumb: "images/6thumb.jpg",
    },],
    reviews: [
      {
      stars: 5,
      body: "nice.",
      author: "m34tluv3r42",
    },],
    },
    {
      name: "Air King",
      dimensions: "1920 x 1200",
      description: "Akira Takizawa is: The Air King.",
      canPurchase: true,
      images: [{
        full: "images/7.jpg",
        thumb: "images/7thumb.jpg",
      },],
      reviews: [
        {
        stars: 5,
        body: "nice.",
        author: "m34tluv3r42",
      },],
    },
    {
      name: "Lady of the Lines",
      dimensions: "1229 x 1536",
      description: "A woman who's lost the 3rd dimension.",
      canPurchase: true,
      images: [{
        full: "images/8.jpg",
        thumb: "images/8thumb.jpg",
      },],
      reviews: [
        {
        stars: 5,
        body: "nice.",
        author: "m34tluv3r42",
      },],
    },
    {
      name: "Mountain Clouds",
      dimensions: "2400 x 2400",
      description: "When the land itself becomes a canvas.",
      canPurchase: true,
      images: [{
        full: "images/9.jpg",
        thumb: "images/9thumb.jpg",
      },],
      reviews: [
        {
        stars: 5,
        body: "nice.",
        author: "m34tluv3r42",
      },],
    },
    {
      name: "Jagged Landscape",
      dimensions: "2500 x 2500",
      description: "Color that could cut.",
      canPurchase: true,
      images: [{
        full: "images/10.jpg",
        thumb: "images/10thumb.jpg",
      }],
      reviews: [
        {
        stars: 5,
        body: "nice.",
        author: "m34tluv3r42",
      },],
  },
];
  $scope.Gems = gems;
});
// end sequence 1


myApp.controller("panelController", function($scope){
  var tab = 1;

  $scope.tab = tab;

  $scope.selectTab = function(newTab){
    $scope.tab = newTab;
  };
});

myApp.controller("reviewController",function($scope){
  $scope.newReview = {};

  $scope.addReview = function(i){
    if(!i.reviews){
      i.reviews = [];
    };
    i.reviews.push($scope.newReview);
    console.log($scope.newReview);
    $scope.newReview = {};

  };
});
