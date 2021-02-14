// Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      console.log(names.length);
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// Create an array of names
const namesArr = ['Jack', 'John', 'Jill'];
// Init iterator and pass in the names array
const iterator = nameIterator(namesArr);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Generator example
function* sayNamees() {
  yield 'Jack';
  yield 'John';
  yield 'Jill';
}

const names = sayNamees();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
