console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title1, artist1, yearPublished1 ) {
    console.log('adding to collection...');
    let record1 = {
        title: title1,
        artist: artist1,
        yearPublished: yearPublished1
    }
    collection.push(record1);
    return record1;
} //end addToCollection

function showCollection(collection1) { 
    console.log(`collection contains ${collection.length} items`);
    if (collection1.length < 1) {
        return null
    }
    for (const album of collection1) {
        console.log(album);
    }

    
    return null
} //end logCollection 

showCollection(collection); //empty
console.log(`adding Avicii's True, 2013` , addToCollection(`True`, `Avicii`, 2013) );
showCollection(collection); //True by avicii, 2013
console.log(`adding Avicii's Stories, 2015` , addToCollection(`Stories`, `Avicii`, 2015) );
console.log(`adding Avicii's Tim, 2019 (RIP)` , addToCollection(`Tim`, `Avicii`, 2019) );
console.log(`adding Kygo's Cloud Nine, 2016` , addToCollection(`Cloud Nine`, `Kygo`, 2016) );
console.log(`adding Kygo's Kids in Love, 2017` , addToCollection(`Kids in Love`, `Kygo`, 2017) );
console.log(`adding Kygo's Golden Hour, 2020` , addToCollection(`Golden Hour`, `Kygo`, 2020) );



