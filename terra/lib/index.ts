import type { Env } from "@terra-money/terrain";
import { TerraClient } from './clients/TerraClient';

export class Lib extends TerraClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['terra'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
