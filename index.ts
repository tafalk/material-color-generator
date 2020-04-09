module.exports = (str: string, mode: string | undefined) => {
  const validInputModes = ['light', 'dark']
  if (!!mode && !validInputModes.includes(mode)) {
    throw new Error(
      `If an argument is specified it should be one of ${validInputModes}`
    )
  }
  let hash = 0
  for (let i = 0; i < str?.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  let hex = "#"
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 0xff;
    hex += ("00" + value.toString(16)).substr(-2);
  }
  return hex
}
