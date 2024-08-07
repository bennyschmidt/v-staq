/**
 * TileMap
 *
 * A multi-layered tile map.
 */

import { Tensor } from '../../types';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';

class TileMap {
  constructor ({
    name = '',
    layers = []
  }) {
    if (layers instanceof Tensor) {
      this.layers = layers;
    } else {
      this.fromLayers(layers);
    }

    this.id = window.crypto.randomUUID();
    this.name = name || 'Untitled Map';
    this.createdAt = new Date().toISOString();
    this.updatedAt = null;
    this.tileAtXY = this.tileAtXY.bind(this);

    return this;
  }

  fromLayers (layers) {
    this.layers = new Tensor(layers);

    return this;
  }

  tileAtXY (x, y, layer = 0) {
    const value = this.layers[layer][y][x];

    if (value === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    return value;
  }

  tileNearXY (x, y, layer = 0) {}
}

export default TileMap;
