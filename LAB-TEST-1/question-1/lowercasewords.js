function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject(new Error("Input must be an array"));
        }

        const filteredArray = array.filter(item => typeof item === 'string')
                                   .map(item => item.toLowerCase());
        resolve(filteredArray);
    });
}

// Example usage:
const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['pizza', 'wings']
    .catch(error => console.log(error.message));
