const p = Promise.resolve({id:1233});
p.then((result)=>console.log(result));

// const p_err = Promise.reject(new Error("Error"));
// p_err.then(err=>console.log(err));

// promise.all
const p1 = Promise.resolve({id:1233});
const p2 = Promise.resolve({id:3424});
Promise.all([p1,p2])
    .then(result=>console.log(result));

// promise.race
Promise.race([p1,p2])
    .then(result=>console.log(result));
