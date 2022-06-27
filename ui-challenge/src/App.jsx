import AppRouter from "./router/AppRouter";

//context
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <WalletProvider>
      <AppRouter />
    </WalletProvider>
  )

}
export default App
