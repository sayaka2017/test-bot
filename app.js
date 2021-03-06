var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
var botenv = process.env.BOT_ENV;
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s (%s)', server.name, server.url, botenv);
});

// Create chat bot
var connector = new builder.ChatConnector({
    MicrosoftAppId: process.env.MICROSOFT_APP_ID,
    MicrosoftAppPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

console.log("This is Test");

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    console.log("OK!!!!!");
    session.send("Hello World from " + botenv );
});