let Object;

const request = (search, callback)=> {
    if (!Object){
    console.log("Response initiated")
    fetch('https://teamtreehouse.com/cooperrunstein.json')
    .then(response => response.json())
    .then(json => Object = json)
    .then(() => filterSearch(Object, search))
    .then(()=> callback())
    }
    else{
        callback();
        return filterSearch(Object, search)
    }
    
}

const filterSearch = (profile, param) =>{
    console.log(profile.badges)
    console.log(param)
}
module.exports.request = request;