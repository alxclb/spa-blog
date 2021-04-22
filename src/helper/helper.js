//get categiries from array of objects
export function getCategories(arr){
    let newArr = arr.map(x=>x.categoryId)
    return [...new Set(newArr)];
}

//get random number
export function getRnd(){
    return Math.floor(Math.random() * 5) + 1 
}