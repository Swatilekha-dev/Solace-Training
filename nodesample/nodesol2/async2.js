const async = require("async");

function square(x) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(Math.pow(x, 3));

        }, 2000);

    });

}

async function output(x) {

    const ans = square(x);

    console.log(ans);

}

output(10);

//Output is a async function by declaration --> square() --> resolve() :: setTimeout() --> 




