import { merge } from 'lodash';
import AstronauteResolver from './resolvers/astronaute';
import PlanetResolver from './resolvers/planet';

export const resolvers = merge(AstronauteResolver, PlanetResolver);