```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { /* filter criteria */ } 
  },
  {
    $group: {
      _id: "$fieldName", 
      sum: { $sum: "$anotherField" } //incorrect: should be {$sum: '$anotherField'}
    }
  }
]);
```