//  *****************  variable section
console.log('***** Music Collection *****')
let collection = [];

//  *****************  functions section

function addToCollection( title1, artist1, yearPublished1, array ) {
    let record1 = {
        title: title1,
        artist: artist1,
        yearPublished: yearPublished1
    } //end record1
    array.push(record1);
    return record1;
} //end addToCollection

function findByArtist( artist, array ) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (artist === array[i].artist) {
            results.push(array[i]);
        }   //end if
    } //end for
    return results
} // end findByArtist

//********************* stretch goal
function search(searchTitle, searchArtist, searchYear, array) {

    //results & tracking var declaration
    let result = [];
    let findTitle = false;
    let findArtist = false;
    let findYear = false;
    let titleResult = [];
    let artistResult = [];
    let yearResult = [];

    //end var declaration

    //create search parameter based on inputs
    let parameter = {
        title: searchTitle,
        artist: searchArtist,
        yearPublished: searchYear
    } // end parameter
    
    //actual searching area
    if (parameter.title != '') {
        titleResult= searchSingleParam (parameter.title,array);
        findlbum = true;
    }
    if (parameter.artist != '') {
        artistResult = searchSingleParam (parameter.artist,array);
        findArtist = true;
    }
    if (parameter.yearPublished != '') {
        yearResult = searchSingleParam (parameter.yearPublished,array);
        findYear = true;
    } //end search area

    //return section
    if (findTitle) { 
        if (findArtist) {
            if (findYear) {
                //all 3
                for (const object1 of titleResult) {
                    for (const object2 of artistResult) {
                        for (const object3 of yearResult) {
                            if (object1 === object2 === object3)
                            result.push(object1);
                        }
                    }
                }
            return result    
            }
            //title & artist
            for (const object1 of titleResult) {
                for (const object2 of artistResult) {
                    if (object1 === object2)
                    result.push(object1);
                }
            }
            return result

        } else if (findYear) {
            //title & year
            for (const object1 of titleResult) {
                for (const object3 of yearResult) {
                    if (object1 === object3)
                    result.push(object1);
                }
            }
            return result   
        } else {
        //only title
        return titleResult
        }
    } else if (findArtist) {
        if (findYear) {
            //artist & year
            for (const object2 of artistResult) {
                for (const object3 of yearResult) {
                    if (object2 === object3)
                    result.push(object2);
                }
            }
            return result   
        }
        //only artist
        return artistResult

    } else if (findYear) {
        //only year
        return yearResult

    }   else {
        //blank search
        return array
    }


    //end return section

 
} //end search

function searchSingleParam (param, array) { //this search is property-agnostic
    let result = [];
    for (let i = 0; i < array.length; i++) { //steps thru albums
    const element = array[i];
    let objArray = Object.values(element); //converts element obj to array objArray
        for (let index = 0; index < objArray.length; index++) { //steps thru properties of objArray
            const element = objArray[index];
            if ( param === element ) { //checks if parameter is same as individual property
                result.push(array[i])
            }
        }
    } //end for
    return result
} //end searchSingleParam

//********************* end stretch goal

function showCollection(taco) { 
    //it can be taco //also confusing myself with collection and numbers...
    console.log(`collection contains ${taco.length} items`);
    if (taco.length < 1) {
        return null
    } //end if
    for (const album of taco) {
        console.log(album);
    } //end for

    
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

console.log(`Tiesto albums in collection include:`, findByArtist('Tiesto', collection)); //empty

console.log('blank search result:', search('','','',collection));//should just return collection

console.log(`albums made in 2016:`, search('','',2016, collection));