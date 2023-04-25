//Import the node-emoji library that we installed
import emoji from 'node-emoji';

//Get the emoji name that the user specified on the command line
const emojiName = process.agrv[2];

if (!emojiName) {
  const randomEmoji = emoji.random();
  //if the user did not specify an emoji, try display a random emoji
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  //if the user did not specify an emoji, try to find that emoji
  const foundEmoji = emoji.find(emojiName);
  //if
}
if (foundEmoji) {
  //const randomEmoji
  console.log(foundEmoji.emoji);
} else {
  console.log('Invalid emoji name');
}
