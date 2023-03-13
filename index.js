
let connected_state = false;

const getProvider = () => {
	console.log("windows", window);
	if ("martian" in window) {
  	return window.martian;
	}
	window.open("https://www.martianwallet.xyz/", "_blank");
	return null;
};

async function connect_wallet() {
	let _provider = getProvider();

	if (!_provider) return;

	// disconnect
	if (connected_state) {
		await _provider.disconnect();
		connected_state = false;
		return false;
	}

  let status = await _provider.isConnected();
  if (!status) {
    await _provider.connect();
    connected_state = true;
    return true;
  }
}

window.jsConnectWallet = connect_wallet;