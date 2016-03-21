angular.element(document).ready(function () {
    window.$ = angular.element;
    $('.tab-link').click(function(){
        alert('You clicked a tab!');
    });
});
