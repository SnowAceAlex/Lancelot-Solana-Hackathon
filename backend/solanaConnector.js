const {Connection,Keypair,clusterApiUrl} = require('@solana/web3.js');
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');