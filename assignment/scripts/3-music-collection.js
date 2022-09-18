console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title,artist,yearPublished){
    let album = {title,artist,yearPublished}

    collection.push(album)
    
    return album
}

console.log('Album1: ',addToCollection('Damn', 'Kendrick Lamar', '2017'));
console.log('Album2: ',addToCollection('2014 Forest Hill', 'J. Cole', '2014'));
console.log('Album3: ',addToCollection('College dropout', 'Kanye West', '2004'));
console.log('Album4: ',addToCollection('Take Care', 'Drake', '2011'));
console.log('Album5: ',addToCollection('Illmatic', 'Nas', '1994'));
console.log('Album6: ',addToCollection('IYRTITL', 'Drake', '2015'));

console.log('Collection is:',collection);


function showCollection(array){
    console.log('Collection total is: ',array.length)
        for(let i = 0; i < array.length; i++){
            console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished);
        }

}

console.log(' Running show collection');

showCollection(collection)

function findByArtist(artist){
    search = [];
    for( let i = 0; i < collection.length; i++){
        if(collection[i].artist=== artist){
            search.push(artist)
        
        }
 }
   return search
}
console.log('Test 1 for findyByArtist: Return empty',findByArtist('test'));
console.log('Test 2 for findyByArtist: Return Nas',findByArtist('Nas'));
console.log('Test 3 for findyByArtist: Return Kendrick Lamar',findByArtist('Kendrick Lamar'));











    
