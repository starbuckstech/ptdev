(function($){
  $(function(){

    $('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70, closeOnClick: true});
    $(".dropdown-button").dropdown( { hover: false, constrain_width: false, });
    $('.datepicker').pickadate();
    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space
