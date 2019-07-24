import { Beer } from './beer';
import { BeerRaw } from './beer-raw';

export class BeerFactory {

  static fromRaw(b: BeerRaw): Beer {
    return {
      ...b , };
  }
}
