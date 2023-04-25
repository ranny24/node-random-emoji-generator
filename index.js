import emoji from 'node-emoji';

const emojiName = process.argv[2];

if (!emojiName) {
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  const foundEmoji = emoji.find(emojiName);
  if (foundEmoji) {
    console.log(foundEmoji.emoji);
  } else {
    console.log('Invalid emoji name');
  }
}
