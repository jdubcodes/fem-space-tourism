import launchMobile from '/public/technology/image-launch-vehicle-landscape.jpg'
import launchDesktop from '/public/technology/image-launch-vehicle-portrait.jpg'
import capsuleMobile from '/public/technology/image-space-capsule-landscape.jpg'
import capsuleDesktop from '/public/technology/image-space-capsule-portrait.jpg'
import spaceportMobile from '/public/technology/image-spaceport-landscape.jpg'
import spaceportDesktop from '/public/technology/image-spaceport-portrait.jpg'

export const techImg = (i) => {
  if (i == 1) {
    return launchMobile
  }
  if (i == 2) {
    return capsuleMobile
  }
  if (i == 3) {
    return spaceportMobile
  }
}
