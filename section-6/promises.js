const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise fulfilled");
    },2000);
});

p.then(result=>console.log(result))
.catch(err=>console.log(err));

// get user first
// get repos
// get commits of each repo

function getUser(userId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log({id:userId,username:"srinivas365"});
            resolve({id:userId,username:"srinivas365"});
        },2000);
    });
}

function getRepos(username) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log({username,repos:['repo1','repo2','repo3']});
            //resolve({username,repos:['repo1','repo2','repo3']});
            reject(new Error("couldn't get repos"));
        },2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({repo,commits:[`${repo}-commit1`,`${repo}-commit2`,`${repo}-commit3`]});
        }, 2000);
    });
}

const data = getUser("14fe324de");
data.then((user)=>{
    console.log(user);
    getRepos(user.username).then((repos)=>{
        repos['repos'].forEach(repo => {
            console.log(repo);
            getCommits(repo).then(commits=>{
                console.log(commits);
            })
        });
    })
})
// promise-based approach
data.then(user=>getRepos(user.username))
    .then(repodata=>getCommits(repodata['repos'][0]))
    .then(commits=>console.log(commits))
    .catch(error=>console.log(error));

// async-await approach
async function displayCommits(userId) {
    try {
        const user = await getUser(userId);
        const repo_data = await getRepos(user);
        const commits = await getCommits(repo_data.repos[0]);
        return commits;
    } catch (error) {
        console.log(error);
    }
    
}

displayCommits('12eu3i2').then(commits=>console.log(commits));


