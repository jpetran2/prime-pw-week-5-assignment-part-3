//  *****************  variable section
console.log('***** Music Collection *****')
let collection = [];

//  *****************  functions section

function addToCollection( title1, artist1, yearPublished1, array ) {
    let record1 = {
        title: title1,
        artist: artist1,
        yearPublished: yearPublished1
    }
    array.push(record1);
    return record1;
} //end addToCollection

function findByArtist( artist, array ) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (artist === array[i].artist) {
            results.push(array[i]);
        }   
    }
    







    /* saving for later...didnt work
    let i = 0;
    
    for (let [title, artist1, year] of Object.entries(array)) { // cycling thru albums
        if (artist === artist1 ) {
            results.push(array[i]); 
            console.log('i found one');
            i++;
        }
        else {
        console.log(`none found`);
        }
    }
    console.log(i); */
    return results
} // end findByArtist


function showCollection(taco) { 
    //it can be taco //also confusing myself with collection and numbers...
    console.log(`collection contains ${taco.length} items`);
    if (taco.length < 1) {
        return null
    }
    for (const album of taco) {
        console.log(album);
    }

    
    return null
} //end logCollection 







//  *****************  testing section
showCollection(collection); //empty
console.log(`adding Avicii's True, 2013` , addToCollection(`True`, `Avicii`, 2013, collection) );
showCollection(collection); //True by avicii, 2013
console.log(`adding Avicii's Stories, 2015` , addToCollection(`Stories`, `Avicii`, 2015, collection) );
console.log(`adding Avicii's Tim, 2019 (RIP)` , addToCollection(`Tim`, `Avicii`, 2019, collection) );
console.log(`adding Kygo's Cloud Nine, 2016` , addToCollection(`Cloud Nine`, `Kygo`, 2016, collection) );
console.log(`adding Kygo's Kids in Love, 2017` , addToCollection(`Kids in Love`, `Kygo`, 2017, collection) );
console.log(`adding Kygo's Golden Hour, 2020` , addToCollection(`Golden Hour`, `Kygo`, 2020, collection) );
showCollection(collection); //6 items

console.log(`Kygo albums in collection include:`, findByArtist('Kygo', collection)); //3 objs

console.log(`Avicii albums in collection include:`, findByArtist('Avicii', collection)); //3 objs

