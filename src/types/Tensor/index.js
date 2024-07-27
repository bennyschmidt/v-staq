/**
 * Tensor
 *
 * An array of matrices.
 */

import Matrix from '../Matrix';

class Tensor extends Array {
  constructor (matrixArray) {
    super(...matrixArray.map(matrix => new Matrix(matrix)));
  }
}

export default Tensor;