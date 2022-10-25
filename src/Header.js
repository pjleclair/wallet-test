import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useEnsName } from 'wagmi';

const Header = () => {
    const {address} = useAccount()
    const {ensName} = useEnsName({
        address: address
    })
    
    console.log(address)

    return (
        <div className="App">
          <header className="App-header">
            Name: {ensName}
            <ConnectButton />
          </header>
        </div>
    )
}

export default Header