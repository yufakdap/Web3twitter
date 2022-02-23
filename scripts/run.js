const main = async () => {
    const tweetContractFactory = await hre.ethers.getContractFactory("TwitterPortal");
    const tweetContract = await tweetContractFactory.deploy();
    await tweetContract.deployed();
    console.log("Contract deployed to:", tweetContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); 
    } catch (error) {
      console.log(error);
      process.exit(1); 
    }
   
  };
  
  runMain();