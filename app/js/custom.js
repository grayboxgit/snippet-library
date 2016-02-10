$(document).on("click", "#openall", function() {
    $('.panel-collapse:not(".in")')
        .collapse('show');
    $(".fa-chevron-down").toggleClass('fa-rotate-180');
});
$(document).on("click", "#closeall", function() {
    $('.panel-collapse.in')
        .collapse('hide');
    $(".fa-chevron-down").toggleClass('fa-rotate-180');
});
$(document).on("click", ".accordion-toggle", function() {
    $(this).find($(".fa-chevron-down")).toggleClass('fa-rotate-180');
});
$(document).on("click", ".edit-icon", function() {
    $(this).toggleClass('visible');
});

$("#progress-popover").popover({
    html : true,
    trigger: "hover click",
    content: function() {
        return $('#popover1').html();
    }
});
angular.element(document).ready(function () {
    //$('#dashboard-table').dataTable({
    //    paging: false,
    //    "aoColumnDefs": [
    //        {
    //            "bSortable": false,
    //            "aTargets": ["sorting_disabled"]
    //        }
    //    ]
    //});
});
$(document).on("focus click", "input.form-control", function() {
    $(this).prev('.input-group-addon').toggleClass('input-group-addon-focus');
    $(this).next('.input-group-addon').toggleClass('input-group-addon-focus');
});
$(document).on("blur click", "input.form-control", function() {
    $(this).prev('.input-group-addon').toggleClass('input-group-addon-focus');
    $(this).next('.input-group-addon').toggleClass('input-group-addon-focus');
});
