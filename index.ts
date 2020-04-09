module.exports = (mode: string | undefined) => {
  const validInputModes = ['light', 'dark']
  if (!!mode && !validInputModes.includes(mode)) {
    throw new Error(
      `If an argument is specified it should be one of ${validInputModes}`
    )
  }
  
};
