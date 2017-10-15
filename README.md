# it-is-the-egg-server
Level loading and saving and scores and stuff for [It Is The Egg](https://github.com/danieljharvey/it-is-the-egg)

Experimenting with making a nice REST API in node mainly, all seems fine. Here, as some sort of menu for myself, is what will be required.

## getLevel
takes a `levelID`, returns a saved level

Ideally this will be `GET /levels/2` etc

## saveLevel
takes `data` which is JSON info for level and a `levelID` and saves in DB

Ideally this will be `PUT /levels/` with data sent

## getLevelsList
returns an array of valid `levelID`s

Ideally this will be `GET /levels/`

## saveScore
takes a `levelID`, `score` and `rotationsUsed` - saves it for game records

Ideally this will `PUT /scores/` with data sent

## getLevelScores
takes a `levelID`, returns scores for that level

Ideally this be `get /scores/4` etc.
