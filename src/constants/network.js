import {Network, Networks} from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      url: 'https://testnet-horizon.triamnetwork.com',
      networkObj: new Network(Networks.TESTNET),
    },
    public: {
      url: 'https://horizon.triamnetwork.com',
      networkObj: new Network(Networks.PUBLIC),
    }
  },
  defaultName: 'test',
};
export default NETWORK;
