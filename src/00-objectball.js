function mostPointsScored(playerName){
    let Object = gameObject()
    let playerObj = {}

    for(let teamKey in Object){
     
       playerObj = Object[teamKey]["players"][playerName]
        
    }
    return playerObj["shoe"];
};
