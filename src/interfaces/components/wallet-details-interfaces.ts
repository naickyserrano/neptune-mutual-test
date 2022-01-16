import { WalletDetailsArrayInterface } from './../pages/home-interfaces'

export interface WalletDetailsPropsInterface {
  walletDetailsArray: Array<WalletDetailsArrayInterface>
  handleDisconnectToWallet: () => void
}
