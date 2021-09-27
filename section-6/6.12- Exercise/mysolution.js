function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    });

}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('inside send email');
            resolve();
        }, 4000);
    });
}

async function notify(userId) {
    const customer = await getCustomer(userId);
    console.log(customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log(movies);
        await sendEmail(customer.email, movies);
        console.log("Email sent...");
    }
}

notify(1);