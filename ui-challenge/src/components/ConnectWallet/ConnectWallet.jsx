import { useContext } from "react";
import WalletContext from "../../context/WalletContext";

//components
import Spinner from "../Spinner/Spinner"


//Images
import WalletIMG from "../../img/wallet.svg"


//Style
import "./ConnectWallet.css";
const ConnectWallet = () => {

    const { connectWallet, connecting } = useContext(WalletContext);

    const handleOnClickConnectWallet = async () => {
        await connectWallet();
    }

    return (
        <div className="wallet-section">
            <div className="wallet-image">
                <img src={WalletIMG} alt="wallet image" />
            </div>
            <div className="wallet-connect">
                <p>Let us store your data securely and reliably.</p>

                <div className="button-area">
                    {
                        connecting
                            ? <Spinner />
                            : (<button className="wallet-button"
                                onClick={handleOnClickConnectWallet}
                            >
                                Connect Wallet
                            </button>)
                    }
                </div>


            </div>
        </div>
    )
}

export default ConnectWallet