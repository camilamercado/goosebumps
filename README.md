goosebumps
==========

twitter API

A Text-based API that follows the structure outlined in R.L Stiens "Give Yourself Goosebumps" Novels

At every point in the game, users will be faced with a series of choices that will move themselves (or a group), in a unique direction.
In order to progress the game to the next decision, the user includes one (and only one) of the highlighted keyword choice identifiers into a tweet.
Users are able to access each game by attributing a specific hashtag to their tweets, 
which will then be searched for specific keywords to further the progession of the adventure.


Example:

	You are in a dark passage

	-FEEL the walls for an opening
	-LIGHT your last match
	-WALLOW in despair

At this point, the user makes a tweet with the specific #identifier (ex:#MadMummy01)

	ElBarto: Feel? #MadMummy01
	
Having now a tweet with the correct hashtag to parse through, the program can acknowledge which choice has been used. (FEEL)

	You cut your hand on something jagged
	
	-SPIT on it and carry on
	-GRAB some gauze you feel under your feet
	-WALLOW in despair

Having now been brought back to a similar decision making situation the process continues until either- the user chooses the wrong choice and dies,
or the user runs through the entire string of choices without committing a fatal error, and can win the game.