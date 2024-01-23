export const crewIndex = (member) => {
  if (member === 'Douglas Hurley') {
    return 0
  } else if (member === 'Mark Shuttleworth') {
    return 1
  } else if (member === 'Victor Glover') {
    return 2
  }
  return 3
}

export const destIndex = (dest) => {
  if (dest === 'Moon') {
    return 0
  } else if (dest === 'Mars') {
    return 1
  } else if (dest === 'Europa') {
    return 2
  }
  return 3
}

export const techIndex = (number) => {
  if (number === '1') {
    return 0
  } else if (number === '2') {
    return 1
  }
  return 2
}
