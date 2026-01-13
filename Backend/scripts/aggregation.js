const pipeline = [
  { $match: { quantity: { $gt: 5 } } },
  {
    $group: {
      _id: "$category",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
  { $sort: { totalRevenue: -1 } },
]

console.log(" Aggregation Pipeline:", JSON.stringify(pipeline, null, 2))
