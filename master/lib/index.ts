import type { Env } from "@terra-money/terrain";
import { MasterClient } from './clients/MasterClient';

export class Lib extends MasterClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['master'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
