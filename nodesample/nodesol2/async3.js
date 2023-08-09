const async = require("async");

function square(a,b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
}

async function output(c,d) {
    const ans = await square(c,d);
    console.log(ans);
}

output(60,30);

//Output is a async function by declaration --> square() [await] --> resolve() :: setTimeout() --> Promise()




