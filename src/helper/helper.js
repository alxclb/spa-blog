
export function getCategories(arr) {
    let newArr = arr.map((x) => x.categoryId);
    return [...new Set(newArr)];
}

export function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

export function textValidation(text){
    const regex = /^[a-zA-Z0-9.-]+$/g
    return regex.test(text);
}