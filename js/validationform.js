// Validate Contact Form
var validationApp = angular.module('validationApp', []);
validationApp.controller('mainController', function ($scope) {
    $scope.submitForm = function (isValid) {
        if (isValid) {
            swal({
                title: "Thank you!",
                text: "Your message has been sent!",
                icon: "success",
                button: "Close",
            });
        }
    };
});

// Validate Booking Form
function validateForm()
{
    var date = document.getElementById('date').value;
    var location = document.getElementById('location').value;
    var number = document.getElementById('number').value;

    if (date == ''){
        alert('Please choose date');
    }
    else if (location == '')
    {
        alert('Please choose location');
    }
    else if (number == '')
    {
        alert('Please enter number of tickets');
    }
    else{
        swal({
            title: "Thank you!",
            text: "Your ticket has been booked!",
            icon: "success",
            button: "Close",
        });
    }
    return false;
}
// Validation Feedback
function validateFeedback()
{
    var comment = document.getElementById('comment').value;
        swal({
            title: "Thank you!",
            text: "Your feedback has been sent!",
            icon: "success",
            button: "Close",
        });
    return false;
}