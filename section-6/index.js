console.log("before");
getUser(1,(user)=>{
    console.log(user);

    // get repos
    getRepos(user.name,(repos)=>{
        console.log(repos);
    })
});
console.log("after");

function getUser(id,callback) {
    setTimeout(()=>{
        callback({id,name:"srinivas-tanla"});
    },2000);
}

function getRepos(username,callback) {
    setTimeout(()=>{
        console.log("calling github API");
        callback(['repo1','repo2','repo3']);
    },2000);
}

// callbacks
// promises
// async await