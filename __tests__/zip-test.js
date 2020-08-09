import zip from '../src/utils/zip';

describe('zip', () => {
  it('should zip two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    zip(arr1, arr2)
      .forEach((zippedArr) => expect(zippedArr.length).toEqual(2));
  });
});
