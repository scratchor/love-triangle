/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let triangles = 0;
let z;
let num = 0;
let arr=[];
function countTriangles(preferences, num) {
  for (num; num < preferences.length; num++) {
    let x = preferences[num];
    let y = preferences[x - 1]
    if(y && y !== x) {
      z = preferences[y - 1];
      } else {
        continue;
      }; 
    if(z === (num + 1) && !arr.some(isEqual)) {
      triangles++;
      arr.splice(arr.length, 0, x, y, z);
      continue;
    } else {
      continue;     
    };
  };
  function isEqual(item) {
     return item === z;
  };
  };
  countTriangles(preferences, num);
  return triangles;
};

