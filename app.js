import { check,checkAsync,logAsyncCheck, log } from "./ht-js5/promises.js";

// Error check
check('fff')
.then(val => log(val))
.catch(err => {
    console.log(err.message);
})

// Odd check
check(13)
.then(val => log(val))
.catch(err => {
    console.log(err.message);
})

// Even check
check(12)
.then(val => log(val))
.catch(err => {
    console.log(err.message);
})

// Error check async/await
{
    try{
        const res = await checkAsync("fff");
        logAsyncCheck(res);
    }catch(err){
        console.log(err.message);
    }

}


// Odd check
{
    try{
        const res = await checkAsync(13);
        logAsyncCheck(res);
    }catch(err){
        console.log(err.message);
    }

}

// Even check
{
    try{
        const res = await checkAsync(12);
        logAsyncCheck(res);
    }catch(err){
        console.log(ererr.messager);
    }

}
