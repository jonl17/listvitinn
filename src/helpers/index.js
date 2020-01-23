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
    return "Opens in " + (timeUntilOpnun + 2) + " days"
  }
  // get lokun date
  let words2 = end
  let lokun = new Date(words2)
  // calculate time until lokun if it has opnened
  let diffTime = lokun - now
  let timeToLokun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  if (timeToLokun === -1) {
    return "Closes today"
  }
  if (timeToLokun < -1) {
    return "Closed"
  }
  return timeToLokun + 2 + " days remaining"
}

export const filterExhibitions = (list, filter) => {
  if (filter === `all`) return list
  if (filter === `open`) return getOpen(list)
  if (filter === `closed`) return getClosed(list)
  if (filter === `opening soon`) return getOpeningSoon(list)
}

export const getOpeningSoon = list => {
  var today = new Date()
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var opnun = new Date(list[i].node.opnun)
    if (today < opnun) {
      newList.push(list[i])
    }
  }
  return newList
}

export const getClosed = list => {
  var today = new Date()
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var lokun = new Date(list[i].node.lokun)
    if (today > lokun) {
      newList.push(list[i])
    }
  }
  return newList
}

export const getOpen = list => {
  var today = new Date()
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var lokun = new Date(list[i].node.lokun)
    var opnun = new Date(list[i].node.opnun)
    if (lokun >= today && opnun < today) {
      newList.push(list[i])
    }
  }
  return newList
}
