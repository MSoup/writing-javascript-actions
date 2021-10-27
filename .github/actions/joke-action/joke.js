const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com or to contact us."
    },
    json: true

};

async function getJoke() {
    const res = await request(options);
    console.log(res)
    return res.joke
}

module.exports = getJoke;
    