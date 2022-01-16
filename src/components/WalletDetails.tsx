import { Table, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { WalletDetailsPropsInterface } from '../interfaces/components/wallet-details-interfaces'
import { TableContainer } from '../styles/components/wallet-details-styles'

const WalletDetails = (props: WalletDetailsPropsInterface): JSX.Element => {
  const { walletDetailsArray, handleDisconnectToWallet } = props
  const columns: ColumnsType<any> = [
    {
      title: 'KEY',
      dataIndex: 'key',
    },
    {
      title: 'VALUE',
      dataIndex: 'value',
      align: 'right',
    },
  ]
  return (
    <>
      <TableContainer>
        <Table
          columns={columns}
          rowKey="id"
          dataSource={walletDetailsArray}
          size="small"
          pagination={false}
        />
      </TableContainer>
      <Button
        type="primary"
        block
        size="large"
        danger
        onClick={handleDisconnectToWallet}
      >
        Disconnect
      </Button>
    </>
  )
}

export default WalletDetails
