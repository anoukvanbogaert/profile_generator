const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const first = "";
const activity = "";
const music = "";
const meal = "";
const food = "";
const sport = "";
const superPower = "";

const profile = rl.question("What's your name? Nicknames are also acceptable :)",(first) => {
  rl.question("What's an activity you like doing? ",(activity) => {
    rl.question("What do you listen to while doing that? ",(music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",(meal) => {
        rl.question("What's your favourite thing to eat for that meal? ",(food) => {
          rl.question("Which sport is your absolute favourite? ",(sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!",(superPower) => {
              console.log(`${first} loves to ${activity} and ${sport} while listening to ${music} and making themselves a nice ${food} for ${meal}. They're also great at ${superPower}!`)
              rl.close();
            })
          })
        })
      })
    })
  })
});


