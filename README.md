# MongoDB Aggregation Error: $sum Operator Syntax
This repository demonstrates a common error in MongoDB aggregation pipelines, specifically an incorrect syntax in the `$sum` operator within the `$group` stage.

## Problem
The provided code snippet uses an incorrect syntax for the `$sum` operator.  The value being summed must be enclosed within curly braces `{}`,  using the field name prefixed with a dollar sign. Incorrect usage leads to an error and prevents the aggregation pipeline from executing successfully. 

## Solution
The solution involves correctly applying the `$sum` operator by providing the field name within a `$` expression correctly.