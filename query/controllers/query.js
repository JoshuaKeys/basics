const { asyncHandler } = require("@giantsoftnats/common");
const querySchema = require("../models/query-schema");

exports.getQueries = asyncHandler(async (req, res, next) => {
  const queries = await querySchema.find({});
  res.send(queries)
});
