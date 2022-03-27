---
title: "Blockchain Platforms: Should I Build on Bitcoin or Ethereum or Cardano or…"
lastmod: 2019-02-09T20:13:36-02:00
draft: true
tags: [ technology, crypto, categoria1, categoria2 ]
images: [dech.jpg]
---

In the beginning of the personal computing revolution, there were dozens of different brands of computers, each with their own competing architecture or OS. Your Apple //e apps did not run on your IBM XT or Commodore Amiga or ColecoVision or TI-99/4A. (Computers had such catchy names, didn’t they?)
<!--more-->
The app ecosystem was fractured. Popular applications had to be ported to different platforms. Then, in the late 90s, the web took off as an application platform. By 2010, 80% of American households were using the web.

Today, we’re busy reinventing the web platform. The web is ubiquitous. Almost every internet-connected person in the world can interact successfully with most popular modern apps on a smartphone.

But we’re not done building the web platform. Users want more control over who has access to their data, and everybody seems to want more financial inclusion. Even accredited investors are not satisfied with the current state of finance. They want better options for fundraising and liquidity for their investments. Better portfolio management tools. Better reporting and accountability. Better access to diversified asset classes.

The decentralized web will revolutionize data privacy, financial inclusion, payments, and protocols. With affordable, streaming micropayments, new, self-sustaining, open source, decentralized protocols can emerge, giving everyone the opportunity to earn money and participate using resources they already own.

It’s the gig economy — but your computer goes to work to earn you money while you sleep, in exchange for bandwidth, storage, and computing resources to power decentralized applications.

You are the next Amazon Web Services. Your smartphone wallet is the next bank security guard, validating transactions and rejecting thieves.

## The First Question
The first question for decentralized app (DApp) builders is, "which Blockchain should I build on?" and my answer may surprise you: probably a few of them — for the same app.

Blockchains are not stand-alone application platforms that a user has to download on their device to run your apps. Instead, they’re decentralized service networks which keep track of data and transactions for your users.

[Ethereum](www.gooogle.com) as a "world computer" is a bit misleading. It’s more like a globally distributed database that anybody can help host, capable of running special programs called **[smart contracts](www.gooogle.com)**.

There are many others cryptonetworks, each with different trade-offs in security, privacy, bandwidth, latency, and throughput. Selecting a blockchain is more like selecting a database for a particular application service than selecting a development platform for an entire app. Just like you might use PostgreSQL for SQL-queryable financial data, and Redis for high-performance, low-latency reads, you may need near-instant finality (ruling out Bitcoin), or inexpensive data storage (ruling out Ethereum). Different decentralized technologies are good for different use-cases, and often, your app will require more than any single blockchain can deliver.

So the answer is, use the network that supplies the service you need.

Since most complex apps require many services, you might end up using Ethereum for authentication¹, Bitcoin **anchors** for immutable timestamps², and Cardano for complex and cost-critical smart contracts³.

{{< img src="dech.jpg" alt="Screenshot of the Onion homepage" />}}


> AND, not OR.

Currently, most DApps are built with one Blockchain ecosystem in mind, but in the future, the Web3 foundation hopes to unite all the chains with the Polkadot network, and Chainlink (partnered with Google and Oracle) plan to connect any existing API to smart contracts.

## Introducing new contextual title and subtitles

### Improved for better readability

Instead of optimizing for a single use case of titles and subtitles as in the past, we now check to see if you are using a header at the top of a story (as a title or subtitle) or within the body (as a section or subsection), and style the headings to the size and spacing that complement your stories rather than compete with them.

Today, you can incorporate multiple blockchain protocols using **smart wallets**⁴, **meta-transactions**⁵, and application node services that delegate requests to whatever chain you need to communicate with.

The future of crypto is a *united, open, cooperative platform* that will form the foundation of the next evolution of the web: The internet of value.

1. There are polyfill Web3 providers for Ethereum that work in every modern browser today, and it’s currently the most mature developer ecosystem in the space.
2. An **anchor** is a cryptographic hash representing some data which is encoded in a data transaction on a blockchain for the purpose of proving that the hashed data existed at a particular point in the blockchain’s timeline. For anchors to work, the blockchain must store the entire transaction data set immutably for as long as the proof is needed. Bitcoin is currently the most secure anchor storage chain.
3. **Plutus** is a Haskell-based smart contract programming language. It is currently the only formally-verified, functional, and static typed smart contract language.
4. A **smart wallet** is a cryptocurrency wallet integrated with smart contracts and protocol services which can assist users by cosigning or delegating transactions on their behalf. Smart wallets can add capabilities like key recovery, daily spending limits, and cross-chain functionality.
5. **Meta transactions** are transactions performed on behalf of the user by automated services such as smart contracts. Meta transactions are commonly used to overcome onboarding and adoption hurdles by funding transaction fees for users and simplifying application user interfaces. Smart wallets often rely on meta transactions.