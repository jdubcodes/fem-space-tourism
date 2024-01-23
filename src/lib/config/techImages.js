import launchMobile from '/public/technology/image-launch-vehicle-landscape.jpg'
import launchDesktop from '/public/technology/image-launch-vehicle-portrait.jpg'
import capsuleMobile from '/public/technology/image-space-capsule-landscape.jpg'
import capsuleDesktop from '/public/technology/image-space-capsule-portrait.jpg'
import spaceportMobile from '/public/technology/image-spaceport-landscape.jpg'
import spaceportDesktop from '/public/technology/image-spaceport-portrait.jpg'

export const techImg = (i, w) => {
  if (i == 1) {
    if (w >= 1280) {
      return launchDesktop
    }
    return launchMobile
  }
  if (i == 2) {
    if (w >= 1280) {
      return capsuleDesktop
    }
    return capsuleMobile
  }
  if (i == 3) {
    if (w >= 1280) {
      return spaceportDesktop
    }
    return spaceportMobile
  }
}
