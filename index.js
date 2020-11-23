function superbowlWin(objArr) {
  const found = objArr.find(element => element.result === "W")
  if (found) {
    return found.year
  } 
}

