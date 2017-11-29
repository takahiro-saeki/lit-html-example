const yosay = require('yosay');
const _ = require('lodash');

const msg = {
  msg1: "finished! You got it!",
  msg2: "Are you tired? take your time.",
  msg3: "That's what I'm talking about!"
}

const box = [msg.msg1, msg.msg2, msg.msg3]

const word = _.shuffle(box)

console.log(yosay(word[0]));