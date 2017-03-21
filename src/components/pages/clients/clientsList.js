/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadClients, deleteClientItem, editClientItem, fnChangeNavigationBar } from '../../../actions'
import Table from '../../components/table'
import { pageClients } from '../../../data/enums'
import { TableActionsClients } from '../componentsPages'


class ClientsList extends Component {
  componentDidMount () {
    this.props.loadClients()
  }

  componentWillReceiveProps (nextProps) {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of clients',
        url: ''
      }
    ])
  }

  fnGetTableColumns () {
    const DATA = pageClients.tableColumns.slice(0)
    DATA.push({
      key: 'actions',
      name: 'Actions',
      width: 70,
      formatter: <TableActionsClients dialog={this} />
    })
    return DATA
  }

  fnUpdateItem (id, key, value) {
    let params = {
      Name: '',
      Comment: '',
      ImageId: ''
    }
    params[key] = value
    this.props.editClientItem(id, params.Name, params.Comment, params.ImageId)
  }

  fnDeleteItems (selected, data) {
    selected.map(obj => {
      this.props.deleteClientItem(data[obj].Id)
    })
  }

  render () {
    const { clients, loading } = this.props.clients
    let clientsList = []
    if (!loading) {
      clientsList = clients.data.map( client => {
        return {
          Id: client.id,
          Name: client.name,
          Comment: client.comment,
          ImageId: client.image_id,
          actions: {
            Id: client.id,
            Name: client.name,
            Comment: client.comment,
            ImageId: client.image_id
          }
        }
      })
    }
    return (
      <div className="organizationPage wrapPage">
        <div className="table-page">
          <Table
            uid={null}
            columns={::this.fnGetTableColumns}
            ref="MyTableWorkListPage"
            data={{
              iTotalRecords: 5,
              tableData: clientsList
            }}
            limit={pageClients.params.limit}
            offset={pageClients.params.offset}
            search={pageClients.params.search}
            searchBy={pageClients.params.searchBy}
            order={pageClients.params.order}
            orderBy={pageClients.params.orderBy}
            searchByList={pageClients.searchList}
            fnGetData={this.props.loadClients}
            fnRemoveItem={::this.fnDeleteItems}
            fnUpdateItems={::this.fnUpdateItem}
            enableCellSelect
            limitList={pageClients.rowsPerList}
            title="List of clients"
            // searchButton
            selectOption
            removeItemOption
            addButton
            addButtonLink="/clients/add"
            rowHeight={50}
          />
        </div>
      </div>
    )
  }
}
export default connect ( ({clients}) => ({clients}), { loadClients, deleteClientItem, editClientItem, fnChangeNavigationBar })(ClientsList)
