// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function main(){

    const [deployer]=await ethers.getSigners();
    console.log('deploy by acct: '+deployer.address);
    
    const bal=await deployer.getBalance();
    console.log('bal: '+bal);

    const owner = "";
    console.log('owner to set: '+owner);

    // deploy clk Token
    clk=await ethers.getContractFactory('Click');
    clktoken = await clk.deploy();
    console.log(`const clktoken = "${clktoken.address}"`);

    console.log("transfer ownership");
    await clktoken.nominateNewOwner(owner);
    
}

main().then(()=>process.exit(0))
.catch(err=>{  
    console.error(err);
    process.exit(1);
})
