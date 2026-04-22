
export function createVisitor(name, age, ticketId) {
  const data={name,age,ticketId}
  return data
}

export function revokeTicket(visitor) {
  visitor['ticketId']=null
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
      return 'unknown ticket id';
    case null:
      return 'not sold';
    default:
      return `sold to ${name}`
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
    case null:
      return 'invalid ticket !!!';
    default:
      return name;
    }
}

export function gtcVersion(visitor) {
  return visitor?.gtc?.version
}
