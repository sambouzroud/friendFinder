var friendData 		= require('../data/friends.js');
var path 			= require('path');



var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		console.log(friendData);
		res.json(friendData);
	});




	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDifference = 0;

		
		for(var i = 0; i < friendData.length-1; i++){
			console.log(friendData[i].name);
			totalDifference = 0;

			
			for(var j = 0; j < 10; j++){
				
				totalDifference = Math.abs(parseInt(usrScores[j]) - parseInt(friendData[i].scores[j]));
				
				// if (totalDifference <= greatMatch.friendDifference){
					
					console.log(friendData[i].name);
					greatMatch.name = friendData[i].name;
					greatMatch.photo = friendData[i].photo;
					greatMatch.matchDifference = totalDifference;
				// }
			}
		}

		friendData.push(usrData);
 
		res.json(greatMatch);
	});
};