
export function isValidCommand(command) {
  return /^chatbot/i.test(command)
}

export function removeEmoji(message) {
  return message.replaceAll(/emoji[0-9]+/g, '')
}

export function checkPhoneNumber(number) {
  if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return 'Thanks! You can now download me to your phone.'
  }
  return `Oops, it seems like I can't reach out to ${number}`
}

export function getURL(userInput) {
  const urlFormat = /[a-z]+\.[a-z]+/g;
  const matches = userInput.match(urlFormat); console.log(matches);
  
  return matches;
}

export function niceToMeetYou(fullName) {
  const name=fullName.split(",")
  return `Nice to meet you,${name[1]} ${name[0]}`
}
