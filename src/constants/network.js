import {Network, Networks} from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      url: 'https://testnet-horizon.arm-system-holdings.com',
      networkObj: new Network(Networks.TESTNET),
    },
    public: {
      url: 'https://horizon.arm-system-holdings.com',
      networkObj: new Network(Networks.PUBLIC),
    }
  },
  defaultName: 'test',
};
export default NETWORK;
