$(document).ready(function() {
  $('body header .menu').click(function() {
    $('body .container .list').slideDown('fast');
    $('body header .menu > div').hide();
    $('body header span').show();

    // $('body header .menu > div').toggle('body header span');

    $('body header span').click(function() {
      $('body .container .list').slideUp('fast');
      $('body header span').hide();
      $('body header .menu > div').show();
    });
  });

  $('body .container .list li:nth-child(1n)').click(function() {
    $('body .swdev').show();
    $('body .container .list').hide();
    $('body header span').hide();
    $('body header .menu > div').show();
  });

});
