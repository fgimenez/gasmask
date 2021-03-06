// must unlock the account we are creating the contract from so we can spend its ether
personal.unlockAccount(web3.eth.accounts[0], 'test');

// The following was copied from the online solidity compiler:
// https://ethereum.github.io/browser-solidity
var mortalContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
var mortal = mortalContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x606060405234610000575b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6101078061005c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514603c575b6000565b3460005760466048565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141560d857600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b5600a165627a7a723058208210aa58922453542e8ce7b0e1661ecc74bc21ef725709a60805bd006afabc170029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 });

 // We set set our custom greeting here
 var _greeting = 'hello private test network' ;
 var greeterContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"type":"constructor"}]);
 var greeter = greeterContract.new(
    _greeting,
    {
      from: web3.eth.accounts[0],
      data: '0x6060604052346100005760405161037c38038061037c833981016040528080518201919050505b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8060019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b557805160ff19168380011785556100e3565b828001600101855582156100e3579182015b828111156100e25782518255916020019190600101906100c7565b5b50905061010891905b808211156101045760008160009055506001016100ec565b5090565b50505b505b6102608061011c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514610049578063cfae321714610058575b610000565b34610000576100566100ee565b005b3461000057610065610182565b60405180806020018281038252838181518152602001915080519060200190808383600083146100b4575b8051825260208311156100b457602082019150602081019050602083039250610090565b505050905090810190601f1680156100e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561017f57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b602060405190810160405280600081525060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102295780601f106101fe57610100808354040283529160200191610229565b820191906000526020600020905b81548152906001019060200180831161020c57829003601f168201915b505050505090505b905600a165627a7a72305820eec0b86bffdbd819a02ff308c6b88f38b0644d942634d3eeca9ea644d3a6a0040029',
      gas: '4700000'
    }, function (e, contract){
     console.log(e, contract);
     if (typeof contract.address !== 'undefined') {
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
     }
  });
