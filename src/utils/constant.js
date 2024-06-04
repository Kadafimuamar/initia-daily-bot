class AppConstant {
  static RECEIVERTESTNETADDRESS = "init1gadzrjcp3ef90yka3sz2r6tf4wrjdhe2qr0hyp";

  static CLAIMPOINTMODULEADDRESS = "0x9065fda28f52bb14ade545411f02e8e07a9cb4ba";
  static TUCANAMODULEADDRESS = "0x3933C6AB1A6F84E9CDA13AE78F389666C9B83E69";
  static BRIDGEMODULEADDRESS =
    "0x42cd8467b1c86e59bf319e5664a09b6b5840bb3fac64f5ce690b5041c530565a";

  static INITIAUSDCLIQUIDITYADDRESS =
    "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d";
  static INITIATIALIQUIDITYADDRESS =
    "0xb134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2";
  static INITIAETHLIQUIDITYADDRESS =
    "0xa2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200";

  static INITIAMETADATAADDRESS =
    "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9";
  static USDCMETADATAADDRESS =
    "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609";
  static TIAMETADATAADRESS =
    "0xacceb3b245392afe08346b794cf5c4ff85e7e9a8c82fcaf5112ae9d64ba57ccb";
  static ETHMETADATAADRESS =
    "0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c";

  static OMNINODEVALIDATORADDRESS =
    "initvaloper1m07fvq8flvc3ltjlgk30nznfdjf4hx9nwcpdy9";

  static COIN = {
    GAS: "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
    ETHINITLP:
      "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
    TIAINITLP:
      "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
    USDCINITLP:
      "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
    INIT: "uinit",
    USDC: "uusdc",
  };

  static BridgeID = {
    MINIMOVE: 1,
    MINIWASM: 2,
    INITAI: 6,
    BLACKWING: 8,
    TUCANA: 14,
    NOON: 17,
    CIVITA: 24,
  };

  static getKey(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  static getCoinByValue(value) {
    for (const coin in this.COIN) {
      if (this.COIN[coin] === value) {
        return coin;
      }
    }
    return value;
  }
}

export { AppConstant };
