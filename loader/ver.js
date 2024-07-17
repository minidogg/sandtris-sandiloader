/**
 * Returns whether ver1 is bigger than ver2 or not.
 * @param {Array<Number>} ver1 
 * @param {Array<Number>} ver2 
 */
export function greater(ver1, ver2){
    for(let i = 0; i < 3; i++){
        if(ver1[i] > ver2[i])return true;
        if(ver1[i] < ver2[i])return false;
    }
    return false;
}
console.log(greater([1,0,0],[1,0,0]))