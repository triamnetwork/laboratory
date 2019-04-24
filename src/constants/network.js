export const Networks = {
  TESTNET: 'SAAK5654--ARM-NETWORK--BHC3SQOHPO2GGI--BY-B.A.P--CNEMJQCWPTA--RUBY-AND-BLOCKCHAIN--3KECMPY5L7W--THANKYOU-CS--S542ZHDVHLFV',
  PUBLIC: 'SAAK5654--ARM-NETWORK--BHC3SQOHPO2GGI--BY-B.A.P--CNEMJQCWPTA--RUBY-AND-BLOCKCHAIN--3KECMPY5L7W--THANKYOU-CS--S542ZHDVHLFV'
};

const NETWORK = {
  available: {
    test: {
      horizonURL: 'https://testnet-horizon.triamnetwork.com',
      networkPassphrase: Networks.TESTNET
    },
    public: {
      horizonURL: 'https://horizon.triamnetwork.com',
      networkPassphrase: Networks.PUBLIC
    }
  },
  defaultName: 'test',
};
export default NETWORK;
