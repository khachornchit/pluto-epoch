/// <reference path="../angular/angular.min.js" />

var app = angular.module('plutoEpoch', []);

app.controller("plutoEpochControl", ['$scope', function ($scope) {
    $scope.header = {
        brand: {
            image: 'bootstrap/images/logo.png'
        },
        navbar: [
            { name: "Slider", url: "#" },
            { name: "Our Work", url: "#" },
            { name: "Contact", url: "#" }
        ],
        welcome: {
            title: "Welcome to Pluto Solutions Development",
            text1: "Pluto Epoch is a mean stack application using mongoDB, express, angular.js, node.js, and bootstrap for developing responsive, mobile-first web sites.",
            text2: "We enjoy using our creative expertise and knowledge to help clients and colleague with the best solutions. We are living in Chiang Mai, a creative city and a capital of Northern Thailand presently.",
            login: {
                name: "Login",
                url: "#"
            },
            signup: {
                name: "Sign Up",
                url: "#"
            }
        }
    }

    $scope.slides = [
        { image: "bootstrap/images/slide/0.jpg" },
        { image: "bootstrap/images/slide/1.jpg" },
        { image: "bootstrap/images/slide/2.jpg" },
        { image: "bootstrap/images/slide/3.jpg" }
    ]

    $scope.posts = {
        title: 'Interior design is "the art or process of designing"',
        description: 'Interior design is "the art or process of designing the interior decoration of a room or building".An interior designer is someone who coordinates and manages such projects.',
        list: [
            {
                image: "bootstrap/images/1.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/2.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/3.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/4.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            }
        ]
    }
}]);