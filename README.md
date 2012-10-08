goosebumps
==========

API TwitterBot

A Text-based API that follows the structure outlined in R.L Stiens "Give Yourself Goosebumps" Novels

The GooseBumps TwitterBot is programmed to repsond to mesages including #Goosebumps. 
Specific words within the tweets will prompt the Twitterbot to respond with decisions that allow the user to navigate the structure of the game. 
These decisions will be indicated by two highlighted words. 
In order to progress the game onto the next decision, the user includes one (and only one) of the highlighted keyword choice identifiers into a tweet.

Example:

	You are in a dark passage

	-FEEL the walls for an opening
	-LIGHT your last match
	-WALLOW in despair

At this point, the user makes a tweet with the specific #identifier (ex:#GooseBumps)

	ElBarto: Feel? #Goosebumps
	
Having now a tweet with the correct hashtag to parse through, the program can acknowledge which choice has been used. (FEEL)

	You cut your hand on something jagged
	
	-SPIT on it and carry on
	-GRAB some gauze you feel under your feet
	-WALLOW in despair

Having now been brought back to a similar decision making situation the process continues until either- the user chooses the wrong choice and dies,
or the user runs through the entire string of choices without committing a fatal error, and can win the game.