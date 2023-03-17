require("dotenv").config();
module.exports = {
    MainColor: "#00BFFF",
    Prefix: "Assistant",
    ErrorColor: "#FF0000",
    Token: process.env.TOKEN,
    ClientID: process.env.CLIENT_ID,
    OpenAIapiKey: process.env.OPENAI_API_KEY,
}