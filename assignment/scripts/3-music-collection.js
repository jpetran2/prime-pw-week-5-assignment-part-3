console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title1, artist1, yearPublished1 ) {
    console.log('adding to collection...');
    let record1 = {
        title = title1,
        artist = artist1,
        yearPublished = yearPublished1
    }
    collection.push(record1);
    return record1;
} //end addToCollection

function logC() { //I'm adding this because I want to call this rather than do console.log() over and over again
    console.log(`collection is: ${collection}`);
    return null
} //end logCollection 

logC();
console.log(`adding Avicii's True, 2013` , addToCollection(`True`, `Avicii`, 2013) );
logC();



