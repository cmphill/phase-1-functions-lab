// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264)
}
function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet(start, end);
   if (distance <= 400) {
    return 0
   }
   else if (distance > 400 && distance <= 2000) {
    return .02 * (distance-400)
   }
   else if (distance <= 2500) {
    return 25
   }
   else {
    return 'cannot travel that far'
   }
}