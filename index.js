/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) { 
 let correctTime = false;
 if (hours>=0 && hours<=23){
    if (minutes>=0 && minutes<=59){
        correctTime = true;
    }
 }
 return correctTime;
};
