$(function() {

  $("#tweet-controls").hide();

  $(".tweet-compose").click(function() {
    $("#tweet-controls").show();
  });

  $("textarea").click(function() {
    $(this).height($(this).height() * 2);
    $("button").show();
  });

  // char-count

  $("textarea").keyup(function() {
    $("#char-count").text(140 - $(this).val().length);
    if (parseInt($("#char-count").text()) <= 10) {
      $("#char-count").css('color', 'red');
    }
    else {
      $("#char-count").css('color', '#999');
    }

    if ($(this).val().length > 140) {
      $("#tweet-submit").prop("disabled", true);
      $("#char-count").text('0');
    }
    else {
      $("#tweet-submit").prop("disabled", false);
    }
  });

  $("#tweet-submit").click(function() {
    var $htmlStr = $(".tweet").first().clone();
    $htmlStr.children().find('.avatar').first().prop("src", $("#profile-summary").children().find('.avatar').prop('src'));
    $htmlStr.children().find('.tweet-text').text($('.tweet-compose').first().val());
    $("#stream").prepend($htmlStr);
  });
});
