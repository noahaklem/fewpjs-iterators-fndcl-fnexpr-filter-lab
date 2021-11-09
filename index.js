// Code your solution here
function findMatching(array, name) {
    return array.filter(nameMatch => 
        nameMatch.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(array, partialName) {
    return array.filter(partialMatch => 
        partialMatch.toLowerCase().indexOf(partialName.toLowerCase()) === 0
    )
}

function matchName(array, stringArg) {
    return array.filter( object => 
        object.name == stringArg
    )
}