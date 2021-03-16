

// Check if a value exists in an Object, by converting it to array,
// it assumes that the object is not nested and the value is exact!
export function valueExists(jsObj:Object, value:string){
   return Object.values(jsObj).indexOf(value) > -1;
}