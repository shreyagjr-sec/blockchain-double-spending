# Original project report — blockchain section

**Shreya Gajjar | April 2024**

This extract contains only Chapter 5, Project II, from the original internship report. It covers the blockchain project. The other internship and IoT sections are left out. Figure captions are kept; the original images are not included here.

The report describes the earlier version. For the changes in the current code, see [Changes made](IMPLEMENTATION.md).

---

                                                  CHAPTER 5

                                                 PROJECT II 

Preventing double-spending attacks in cryptocurrency blockchains using network observers and peer-alert systems

  5.1 Introduction

This project explores innovative strategies to enhance the security of cryptocurrency blockchains against double-spending attacks. By implementing network observers and developing a comprehensive peer-alert system, the project aims to detect and mitigate such attacks, ensuring the integrity and trustworthiness of transactions.

5.2 Objective

In this project, to overcome the issues in the existing system, network observers are used that can track anomalous transactions performed without authorization. Additionally, to notify the sender and receiver about the unauthorized transaction, a peer alert system is designed such that the message is passed from the fraudulent node to the sender and receiver nodes.

5.3  What Is a Blockchain?

A blockchain is a distributed database or ledger shared among a computer network's nodes. They are best known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record of transactions, but they are not limited to cryptocurrency uses. Blockchains can be used to make data in any industry immutable—the term used to describe the inability to be altered.

Because there is no way to change a block, the only trust needed is at the point where a user or program enters data. This aspect reduces the need for trusted third parties, which are usually auditors or other humans that add costs and make mistakes.

5.4  How Does a Blockchain Work?

You might be familiar with spreadsheets or databases. A blockchain is somewhat similar because it is a database where information is entered and stored. But the key difference between a traditional database or spreadsheet and a blockchain is how the data is structured and accessed.

A blockchain consists of programs called scripts that conduct the tasks you usually would in a database: Entering and accessing information and saving and storing it somewhere. A blockchain is distributed, which means multiple copies are saved on many machines, and they must all match for it to be valid.

The blockchain collects transaction information and enters it into a block, like a cell in a spreadsheet containing information. Once it is full, the information is run through an encryption algorithm, which creates a hexadecimal number called the hash.

The hash is then entered into the following block header and encrypted with the other information in the block. This creates a series of blocks that are chained together.

5.5 Transaction Process

 Transactions follow a specific process, depending on the blockchain they are taking place on. For example, on Bitcoin's blockchain, if you initiate a transaction using your cryptocurrency wallet—the application that provides an interface for the blockchain—it starts a sequence of events.

In Bitcoin, your transaction is sent to a memory pool, where it is stored and queued until a miner or validator picks it up. Once it is entered into a block and the block fills up with transactions, it is closed and encrypted using an encryption algorithm. Then, the mining begins.

The entire network works simultaneously, trying to "solve" the hash. Each one generates a random hash except for the "nonce," short for number used once.

Every miner starts with a nonce of zero, which is appended to their randomly-generated hash. If that number isn't equal to or less than the target hash, a value of one is added to the nonce, and a new block hash is generated. This continues until a miner generates a valid hash, winning the race and receiving the reward.

Figure 5.1  Transaction Process

Once a block is closed, a transaction is complete. However, the block is not considered to be confirmed until five other blocks have been validated. Confirmation takes the network about one hour to complete because it averages just under 10 minutes per block (the first block with your transaction and five following blocks multiplied by 10 equals about 60 minutes).

Not all blockchains follow this process. For instance, the Ethereum network randomly chooses one validator from all users with ether staked to validate blocks, which are then confirmed by the network. This is much faster and less energy intensive than Bitcoin's process.

5.6 Proposed System

5.6.1 Network observers

The network observers are placed between each pair of nodes.

A sender node that contains the transaction amount, transaction ID and sender details will transfer this information to the neighboring node.

The neighboring node will then transfer this to the corresponding forward node, after performing the transaction step. This continues till the receiver node receives the amount.

The observers within each pair of nodes, will keep a record of the user ids, the number of transactions and amounts issued by them.

With this record, an observer will check the frequency of node communications in its node pair based on the number of transactions issued by the user.

If the frequency is higher than what is required, the anomaly will be logged, and the transaction will be aborted with an acknowledgement sent back to the sender node.

 5.6.2 Peer Alert Systems

When a network observer observes an anomaly at one of the transaction steps between a node-pair, the surrounding nodes are alerted about the fraudulent transaction.

This will help the neighboring nodes terminate their connections with the fraudulent node pair, such that their transactions can be performed along other safe routes.

5.7 Cryptography Blockchain Architecture

Cryptography is a foundational aspect of blockchain architecture, providing the mechanisms    for secure transactions, data integrity, confidentiality, and authentication within a blockchain network.

Cryptographic Hash Functions

A cryptographic hash function is a mathematical algorithm that takes an input (or 'message') and returns a fixed-size string of bytes. The output, known as the hash value or hash, appears random and changes significantly with even a small alteration to the input. In blockchain, hash functions are used to:

Create a unique hash for each block: Each block in the blockchain contains a unique hash of its own data as well as the hash of the previous block. This creates a chain of blocks, where altering the data in any block would invalidate all subsequent blocks because it would change the computed hashes.

secure transactions: Transactions are hashed, and these hashes are used in the process of block creation, ensuring the integrity and immutability of transaction data.

Public Key Cryptography (Asymmetric Cryptography)

Public key cryptography, also known as asymmetric cryptography, uses a pair of keys for encryption and decryption—a public key and a private key. In blockchain:

Digital Signatures: Users sign transactions with their private key, which can then be verified by anyone using the corresponding public key. This proves the origin of the message (authentication) and that the message has not been tampered with (integrity).

Wallet Addresses: A user's public key is transformed through a hash function (and sometimes additional encoding methods) to generate a blockchain address. This address acts as a public identifier on the blockchain, while the private key remains confidential and is used to access and send cryptocurrencies or interact with smart contracts.

Cryptography's Role in Blockchain Security and Trust

Immutable Ledger: Cryptographic hashes ensure that once a transaction has been added to the blockchain, it cannot be altered or removed without detection, creating an immutable record of transactions.

Decentralization and Trust: The combination of cryptographic techniques allows blockchain networks to function without a central authority. Trust is established through cryptographic proofs rather than through an institution or intermediary.

Security: The use of cryptographic signatures and hash functions secures transactions against tampering and fraud, making blockchain networks highly resistant to attacks.

                                      Figure 5.2  Blockchain Architecture

5.8 Double Spending Attack

                                                    Figure 5.3  Model Overview

A double spending attack in the context of cryptocurrency and blockchain technology refers to a situation where someone successfully spends the same digital currency twice. This is a potential issue in digital cash schemes because, unlike physical cash, digital tokens consist of digital files that can easily be duplicated or falsified without the proper safeguards.

Blockchain technology aims to prevent double spending through a combination of cryptographic techniques and a consensus mechanism. Here's a basic outline of how blockchains like Bitcoin aim to prevent double spending:

Public Ledger: All transactions are recorded on a public ledger. Once a transaction is confirmed, it's nearly impossible to alter. This transparency helps prevent double spending because everyone can see the transactions that have occurred.

Network Confirmation: Transactions are grouped into blocks and added to the blockchain through a process called mining (in proof-of-work systems) or a similar mechanism (like proof-of-stake in other blockchains). A transaction is considered confirmed once it's included in a block and additional blocks are added on top of it, making it increasingly difficult to reverse.

Consensus Mechanism: Blockchains use a consensus mechanism to agree on which blocks get added to the chain. In proof-of-work (PoW), this involves miners solving complex mathematical problems to propose new blocks. The network reaches consensus when a majority agree on the next valid block. This mechanism makes it very hard for a single entity to manipulate the blockchain to allow double spending.

5.9 Implementation

To start the initial blockchain, run the following command after entering the directory from the command line or terminal:

node CryptoBlockchain.js

                            Figure 5.4  Output of  CryptoBlockchain.js

 5.9.1 Additional Security

To increase security, a random nonce generator is used, that will be used in the hash creation. Moreover, to increase the time taken to mine individual blocks, a difficulty index is used to append additional zeros to the generated hash, which increases the mining time complexity. Also to validate the cryptocurrency blockchain, for every pair consisting of the current block and its preceding block, a two-fold validation methodology is utilized.

The hash of the current block is recomputed with the same nonce, and the original and recomputed hash values are compared.

The preceding hash of the current block and the hash of the preceding block are compared.

      If a mismatch is found in either of these two steps, the validation function returns an error.

The resulting cryptocurrency blockchain after integrating these additional functionalities is as follows:

                        Figure 5.5  Additional functionalities 

Here, the red highlights denote the appended zeros based on the difficulty index and the green highlights are the random nonces generated to compute the hash for every new block added.

When we observe and log the output of the check chain validity function, before tampering with any one of the blocks, it returns the value true, implying that the blockchain is valid.

     console.log("Is the blockchain valid?"+ smashingCoin.checkChainValidity());

                        Figure 5.6    Blockchain is valid or Not

If instead we try to change the transfer quantity of block 1 from 50 to 200 in the chain, the function returns a value of false, implying an authentication error.

smashingCoin.blockchain[1].data = {amount: 200};

                                  Figure 5.7  Authentication error

       5.7.2 Performing Transactions

To perform transactions between the intended sender and recipient blocks or nodes, their addresses are mined, such that the transaction amount can be deducted from the sender node and added to the receiver node. An array contains the records of pending transactions for every block starting with a null amount transaction for the genesis block, and subsequently stores every new transaction.

An example for demonstration is as follows, the first block sends 100 cryptocurrency units to the second block. The second block in turn returns 50 cryptocurrency units back to the first block. Hence the transaction array will contain the details of the transactions with amounts null, 100 and 50 respectively. After every successful transaction for a particular genesis block, a mining reward of 100 points is added to its balance.

smashingCoin.createTransaction( new Transaction("addr1","addr2",100));

smashingCoin.createTransaction( new Transaction("addr2","addr1",50));

console.log("Starting the miner...");

smashingCoin.minePendingTransactions("myAddress");

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress('myAddress'));

console.log("Starting the miner again...");

smashingCoin.minePendingTransactions("myAddress");

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress('myAddress'));

                              Figure 5.8   Mining reward

5.7.3 Signature

To ensure that every transaction is unique, it is signed with a signature which is generated using the private and public key and calculated hash for a block, using the elliptic library (based on elliptic curve cryptography). This is also used as a security measure to authenticate every transaction. The following image describes a transaction of 10 cryptocurrency units from the genesis block, and a reception of 100 cryptocurrency units by the genesis block.

const tx1 = new Transaction(myWalletAddress,'public_key',10);

tx1.signTransaction(myKey);

smashingCoin.addTransaction(tx1);

console.log("Starting the miner...");

smashingCoin.minePendingTransactions(myWalletAddress);

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress(myWalletAddress));

console.log("Starting the miner again...");

smashingCoin.minePendingTransactions(myWalletAddress);

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress(myWalletAddress));

                  Figure 5.9  Unique Transaction with Signature

       5.7.4 Double Spending Attack

When a sender tries to perform the same transaction (with the same amount) twice, but with two different receivers, even though his initial balance is not sufficient to satisfy both the transactions, a double spending attack occurs. This can be illustrated in the below example. Consider a sender to have 10 cryptocurrency units, who plans to give these 10 units to 2 different receivers, concurrently, across separate blocks. For both these transactions to occur, a total of 20 units should be available with the sender, whereas he has just 10, implying that he plans to reuse the same money of the first transaction, in the second transaction, such that the 10 units is deducted at the same time (so only 10 units is deducted from his balance finally).

const recv_address= fetchAddress();

const tx1 = new Transaction(myWalletAddress,recv_address,10);

tx1.signTransaction(myKey);

global.smashingCoin.addTransaction(tx1);

console.log(global.smashingCoin.pendingTransactions)

new_address= fetchAddress();

const dsa_tx = new Transaction(myWalletAddress,new_address,10);

dsa_tx.signTransaction(myKey);

global.smashingCoin.addTransaction(dsa_tx);

console.log(global.smashingCoin.pendingTransactions)

                 Figure 5 .10 10 units is deducted at the same time

As seen above, the same sender hash address (highlighted in yellow) is involved in two transactions of 10 cryptocurrency units each (underlined in blue), but with different receiver hash addresses. Thus, if these 2 transactions are performed simultaneously (i.e. at the same timestamp), only 10 units will be deducted from his balance at the same time, whereas his actual deduction amount should be 20. The sender can thus exploit this issue to his advantage, and perform many such transactions, but by paying only half the actual amount.

     5.7.5 Network Observers

A network observer will check the number of pending transactions from a particular sender address in a blockchain. If the payment amount of two pending transactions from that address is the same, and the total amount is greater than the initial balance of the sender, a transaction aborted error will be displayed, and the user will be prompted to either cancel the last transaction with the same amount, or to try performing the transaction later.

if(total>balance && num>1)

{

console.log("\nYour transaction has been aborted due to a suspected double-spending attack.");

console.log("\nPlease cancel your last transaction or try again later.");

}

                             Figure 5.11  Aborted error 

       5.7.6 Peer Alert Systems

In order to disconnect from the block where the fraudulent transaction or double spending attack has taken place, the neighboring blocks are alerted. Any subsequent transactions that are scheduled for this block are redirected to other routes, and these neighboring blocks terminate their connections with it. The sender (who wanted to conduct the double spending attack), has to either withdraw any one of the transactions within a given timeout period, or will be blocked temporarily before being able to perform any new transactions again.

      Figure 5.12  Creating four new transactions in the blockchain 

     Figure 5.13  Displaying the current blockchain with the genesis block

              Figure 5.14  Mining blocks to perform the transactions

A double spending attack occurs in the blockchain. The network observer throws an error, asking the user to delete the last transaction, or be temporarily suspended. After this, the peer alert system will terminate connections of the other blocks to the fraudulent blocks (alerting neighboring blocks) as shown below:

  Figure 5.15   A double spending attack occurs in the blockchain

Therefore, due to the double spending attack, the number of transactions reduces from four to two (the ones involved in the attack are aborted). The peer alert system will nullify the preceding hash of blocks that had fraudulent blocks preceding them, due to the fact that the preceding hash is used as one of the parameters to calculate the current hash of any block.

       Figure 5.16  Number of transactions reduces from four to two

To overcome this issue of having a null preceding hash, this block is replaced with a new genesis block, with a preceding hash of '0'. This will also lead to a new current hash being generated, that can be used to perform the same transaction as before (Change of transaction route).

                                 Figure 5.17 Block is replaced with a new genesis block

Finally, after only genuine transactions are contained in the blockchain, they are processed, and the balances of each of the addresses are updated accordingly.

Figure 5.18   Balances of each of the addresses are updated accordingly

