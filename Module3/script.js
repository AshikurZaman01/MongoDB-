// foreach , find , filter , map , indexOf , reduce

const arr = [1, 2, 3, 4, 5];

// if i want to add some text in each data. then have to use foreach loop

// Skipping/Exiting Early:
const dd = arr.forEach((ele) => {

    if (ele === 2 || ele === 1) { return }
    console.log(ele);

})