# Local Storage
* Array of Wallet objects
* Wallet object
  - wallet key (jwk)
  - address

* Active wallet - string representing wallet address
* Active wallet balance - formatted string representing current wallet balance in AR
* Active wallet transaction history - a JSON array of transaction objects for all transactions posted to blockchain

* Setting object containing preferred Arweave gateway/node

# Popup
* State variable containing active wallet address
* State variable containing active wallet balance

# Background script
* Arweave object connected to gateway designated in settings object in storage
 