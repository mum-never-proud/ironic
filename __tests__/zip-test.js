import zip from '../src/utils/zip';

describe('zip', function() {
  it('should zip two arrays', function() {
    const arr1 = [1, 2, 3],
      arr2 = [4, 5, 6];

    zip(arr1, arr2)
      .forEach(zippedArr => expect(zippedArr.length).toEqual(2));
  });
});
