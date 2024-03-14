import algosdk from "algosdk";

const algoToken = "a".repeat(64);
const server: string = "http:/localhost";
const port: string = "4001";

const mnemonic : string = "green frame drama alpha type regular credit goose gravity alone luxury end reject skirt west outside truly funny conduct obtain jacket ostrich artefact ability spy";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algoToken, server, port);
    return client;
};

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
};