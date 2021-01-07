import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import employees from './employees.js'

const App = () => {

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone Number',
      accessor: 'phone_number'
    },
    {
      Header: 'Department',
      accessor: 'department'
    },
  ]

  return (
    <ReactTable
      data={employees}
      columns={columns} />
  )
}

export default App
