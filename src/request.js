let Object;

const request = (search, callback)=> {
    if (!Object){
    console.log("Response initiated")
    fetch('https://teamtreehouse.com/cooperrunstein.json')
    .then(response => response.json())
    .then(json => Object = json)
    .then(()=> callback())
    .then(() =>{ return filterSearch(Object, search)})
    }
    else{
        callback();
        return filterSearch(Object, search)
    }
    
}

const filterSearch = (profile, param) =>{
    let badges = profile.badges;
    let returnedBadges = [];
    console.log(param);
    badges.map((badge)=>{
        let badgeName = badge.name;
        let badgeURL = badge.url;
        let badgeIconURL = badge.iconURL
        if (badgeName.toLowerCase().includes(param.toLowerCase())){
            badgeObject = {
                name: badgeName,
                url: badgeURL,
                icon: badgeIconURL
            }
            returnedBadges.push(badgeObject);
        }
        
    })
    return returnedBadges;
    
}
module.exports.request = request;