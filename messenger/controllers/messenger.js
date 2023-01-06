const { asyncHandler } = require('@giantsoftnats/common');

exports.getName = asyncHandler(async(req, res, next) => {
  res.send('Hellooooooooo')
})