// foreach , find , filter , map , indexOf , reduce

const arr = [10, 23, 13, 44.5, 50, -100];


const fil = arr.filter((element) => {

    if (element > 20) {
        return true;
    } else {
        return false;
    }

})

console.log(fil);