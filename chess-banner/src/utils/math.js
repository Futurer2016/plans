export const random = (min, max) => {
  return Math.random() * (max - min) + min;
}
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
export const randomColor = (alpha) => {
  return `rgb(${ randomInt(0, 256) }, ${ randomInt(0, 256) }, ${ randomInt(0, 256) }${alpha? `, ${randomInt(0, 256)}`: ''})`;
}