class Comment {
  constructor(comments) {
    this.comments = comments;
  }

  addComment(comment) {
    this.comments.push(comment)
  }
}

class ArrayOperations {
  constructor(arr) {
    this.sum = arr.reduce((acc, cur) => acc + cur, 0);
  }

  sumNewArrayOnResult(arr) {
    this.sum += arr.reduce((acc, cur) => acc + cur, 0);
  }
}

const arrayOperations = new ArrayOperations([1, 2, 3, 4, 5]);
console.log(arrayOperations.sum);
arrayOperations.sumNewArrayOnResult([1, 2, 3, 4, 5]);
console.log(arrayOperations.sum);