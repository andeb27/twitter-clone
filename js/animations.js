$(document).ready(function() {
    $('#tweet-submit').css('display', 'none');
    $('#char-count').css('display', 'none');
    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.tweet-compose').on('click', function() {
        $('#tweet-submit').css('display', 'initial');
        $('#char-count').css('display', 'initial');
        $(this).css('height', '5em');
    });
    $('.tweet-compose').on('keyup', function() {
        var $count = $('.tweet-compose').val().length;
        $('#char-count').text(140 - $count);
        if ($count >= 130) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', 'black');
        }
        if ($count > 140) {
            $('#tweet-submit').prop('disabled', true);
        } else {
            $('#tweet-submit').prop('disabled', false);
        }
    });
    $('#tweet-submit').on('click', function() {
        var $text = $('.tweet-compose').val();
        var $name = $('.name').text();
        var $usrnm = '@' + $('.name').text();
        $('.tweet-compose').css('height', '2.5em');
    
        $('#stream').prepend(
                    '<div class="tweet">' +
						'<div class="content">' +
						'	<img class="avatar" src="img/alagoon.jpg" />' +
						'	<strong class="fullname">' + $name + '</strong>' +
						'	<span class="username">' + $usrnm + '</span>' +
						'	<p class="tweet-text">' + $text + '</p>' +
							'<div class="tweet-actions">' +
							'	<ul>' +
								'	<li><span class="icon action-reply"></span> Reply</li>' +
								'	<li><span class="icon action-retweet"></span> Retweet</li>' +
								'	<li><span class="icon action-favorite"></span> Favorite</li>' +
								'	<li><span class="icon action-more"></span> More</li>' +
							'	</ul>' +
						'	</div>' +
							'<div class="stats">' +
							'<div class="retweets">' +
							'<p class="num-retweets">30</p>' +
							'<p>RETWEETS</p>' +
							'</div>' +
							'<div class="favorites">' +
							'<p class="num-favorites">6</p>' +
							'<p>FAVORITES</p>' +
							'</div>' +
							'<div class="users-interact">' +
							'<div>' +
							'<img src="img/vklimenko.jpg" />' +
							'<img src="img/funwatercat.jpg" />' +
							'</div>' +
							'</div>' +
							'<div class="time">' +
							'1:04 PM - 19 Sep 13' +
							'</div>' +
							'</div>' +
							'<div class="reply">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<textarea class="tweet-compose" placeholder="Reply to @HarvardBiz"/></textarea>' +
						'</div>' +
						'</div>' +
					'</div>'
                    );
            $('.tweet').on('mouseenter', function() {
        $(this).find('.tweet-actions').show();
    });
    $('.tweet').on('mouseleave', function() {
        $(this).find('.tweet-actions').hide();
        $(this).find('.stats').hide();
    });
    $('.tweet').on('click', function() {
        $(this).find('.stats').show();
    });
        $('.tweet-actions').css('display', 'none');
        $('.tweet-compose').val('');
        $('#char-count').text(140);
    });
});