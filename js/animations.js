$(function() {

  $("#tweet-controls").hide();
  $(".tweet-actions").hide();
  $(".stats").hide();
  $(".reply").hide();

  $(".time").each(function(i, obj) {
    $(this).attr('title', $(this).text())
  });
  $(".time").timeago();

  $(".tweet-compose").click(function() {
    $("#tweet-controls").show();
  });

  $("textarea").on("focus", function() {
    $(this).height($(this).height() * 2);
    $("button").show();
  });

  $("textarea").on("blur", function() {
    $(this).height($(this).height() / 2);

    if ($(this).val().length == 0)
      $("button").hide();
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
    var $htmlStr = $(".tweet").first().clone(true);
    $htmlStr.children().find('.avatar').first().prop("src", $("#profile-summary").children().find('.avatar').prop('src'));
    $htmlStr.children().find('.tweet-text').text($('.tweet-compose').first().val());
    $htmlStr.children().find('.time').attr('title', new Date());
    $("#stream").prepend($htmlStr);
  });
});

$(".tweet").on({
  mouseenter : function() {
    $(this).children().find(".tweet-actions").show();
  },
  mouseleave : function() {
    $(this).children().find(".tweet-actions").hide();
  }
});

$(".tweet-text").on("click", function() {
  $(this).parent().find('.stats').fadeIn();
  $(this).parent().find('.reply').fadeIn();
})

$(".icon").on("mouseenter", function() {
  console.log($(this).css('background-image'));
});

$(".icon").on("click", function() {
  console.log('clicked the link');
  console.log($(this).parent().html());
});
