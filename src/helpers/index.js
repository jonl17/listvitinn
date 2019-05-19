export const calculateTime = (start, end) => {
  // Today
  let now = new Date().getTime()
  // get opnun date
  let words = start
  let opnun = new Date(words)
  if (opnun.getTime() === now) {
    return "Opens today"
  }
  if (opnun.getTime() > now) {
    // not opened yet
    let diffTime = opnun - now
    let timeUntilOpnun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return "Opens in " + timeUntilOpnun + " days"
  }
  // get lokun date
  let words2 = end
  // console.log(words2)
  let lokun = new Date(words2)
  // calculate time until lokun if it has opnened
  let diffTime = lokun - now
  let timeToLokun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  if (timeToLokun === -1) {
    return "Closes today"
  }
  return timeToLokun + 2 + " days remaining"
}
