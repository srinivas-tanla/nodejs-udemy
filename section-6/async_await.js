let sleep = ms => new Promise((r, j) => setTimeout(r, ms));

console.log("begin");
step1();
step2();
console.log("all steps started");

// ----------------------------------------------

async function step1() {
    console.log("starting step 1");
    await sleep(10000);
    console.log("step 1 handled");
} // step1()

// ----------------------------------------------

async function step2() {
    console.log("starting step 2");
    await sleep(5000);
    console.log("step 2 handled");
} // step2()