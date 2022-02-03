// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    const headQuearters = 42
    let distanceByBlocks 
    distanceByBlocks = Math.abs(pickupLocation - headQuearters)
    return distanceByBlocks
}

function distanceFromHqInFeet(pickupLocation){
    const headQuearters = 42
    let sqftForBlock = 264
    let distance
    distance = Math.abs(pickupLocation - headQuearters)
    let sqft = distance * sqftForBlock
    return distance, sqft
}

function distanceTravelledInFeet(){
    
}