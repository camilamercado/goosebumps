<script type="text/javascript">


$(document).ready(function(){




var _ = require('underscore');
var options = require('./options.js');
var ntwitter = require('ntwitter');
var fs = require('fs');

var tweeter = new ntwitter(options.twitter);

var me = options.twitter.give_Y_G;

var narrative = loadNarrative();
bot();

//can load narrative file?

function loadNarrative()
{
  console.log("Loading narrative...");
  
  var narative = {};
  
  var lines = fs.readFileSync(__dirname + '/Narrative.html');
  
  /*
  _.each(lines, function(line) {
  
    var words = line.split(',');
  
    if (words.length)
    {
      var term = words[0];
      while (true)
      {
        var content = words.join(', ');
        // 140 characters minus 15 character username minus
        // leading @ in reply minus space after username
        if (content.length > (140 - 15 - 2))
        {
          words.pop();
          continue;
        }
        else
        {
          break;
        }
      }
      narrative[term] = synonyms;
    }
  });
  console.log("Narrative loaded.");
  return narrative;*/

  var assertion = "yoyo";


  var nextPage = function(story, assertion) {

    var nextPage;

    _.each(story, function(step, key) {

      _.each(step.content, function(content, key) {

        if(content.name.toLowerCase() === assertion.toLowerCase()) {
          nextPage = 'page_' + content.page;
        }
      });

    });

    return nextPage;
  };


  var response = function (nextPage){

    var storyPage = story[nextPage];
    return storyPage;

  };            


  console.log(
    response(
      nextPage(story, assertion)
    )
  );
}





function bot()
{
  tweeter.verifyCredentials(function (err, data) {
    if (err)
    {
      console.log("Credentials bad. Bummer. Go check that in dev.twitter.com.");
    }
    console.log("Verified credentials");
  })
  .stream('user', { track: options.twitter.username }, function(stream) {
    console.log("Listening to tweets");
    stream.on('data', function (data) {
      if (!data.user)
      {
        // Not a tweet. For example I've received a list of friend ids
        // here for some reason
        return;
      }
      var them = data.user.screen_name;
      if (data.in_reply_to_screen_name === me) {
        var result = data.text.match(/ (\w+)\s*$/);
        if (result)
        {
          var word = result[1].toLowerCase();
          if (_.has(narrative, word))
          {
            reply(narrative[word]);
          }
          else
          {
            reply("sorry, I don't know the choice " + word + ".");
          }
        }
        else
        {
          reply("just tweet me one word and I will tweet back your future.");
        }
      }
      function reply(msg)
      {
        tweeter.updateStatus("@" + them + " " + msg, function(err, data)
        {
          if (err)
          {
            console.log(err);
            // Not a big deal if a tweet fails. We could log something interesting though.
          }
        });
      }
    });
    stream.on('end', function (response) {
      // Handle a disconnection
      console.log('end event, listening again');
      setTimeout(1000, listen);
    });
    stream.on('destroy', function (response) {
      // Handle a 'silent' disconnection from Twitter, no end/error event fired
      console.log('destroy event, listening again');
      setTimeout(1000, listen);
    });
  });
}
};

</script>