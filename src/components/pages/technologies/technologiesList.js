/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTechnologies, deleteTechnologyItem, editTechnologyItem, fnChangeNavigationBar } from '../../../actions'
import Table from '../../components/table'
import { pageTechnologies } from '../../../data/enums'
import { TableActionsTechnologies } from '../componentsPages'


class TechnologiesList extends Component {
  componentDidMount () {
    this.props.loadTechnologies()
  }

  componentWillReceiveProps (nextProps) {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of technologies',
        url: ''
      }
    ])
  }

  fnGetTableColumns () {
    const DATA = pageTechnologies.tableColumns.slice(0)
    DATA.push({
      key: 'actions',
      name: 'Actions',
      width: 70,
      formatter: <TableActionsTechnologies dialog={this} />
    })
    return DATA
  }

  fnUpdateItem (id, key, value) {
    let params = {
      Name: '',
      ImageId: ''
    }
    params[key] = value
    this.props.editTechnologyItem(id, params.Name, params.ImageId)
  }

  fnDeleteItems (selected, data) {
    selected.map(obj => {
      this.props.deleteTechnologyItem(data[obj].Id)
    })
  }

  render () {
    const { technologies, loading } = this.props.technologies
    // console.log(technologies)
    let technologiesList = []
    if (!loading) {
      technologiesList = technologies.data.map( technology => {
        return {
          Id: technology.id,
          Name: technology.name,
          ImageId: technology.image_id,
          actions: {
            Id: technology.id,
            Name: technology.name,
            ImageId: technology.image_id
          }
        }
      })
    }
    return (
      <div className="wrapPage">
        <div className="table-page">
          <Table
            uid={null}
            columns={::this.fnGetTableColumns}
            ref="MyTableTechnologiesListPage"
            data={{
              iTotalRecords: 5,
              tableData: technologiesList
            }}
            limit={pageTechnologies.params.limit}
            offset={pageTechnologies.params.offset}
            search={pageTechnologies.params.search}
            searchBy={pageTechnologies.params.searchBy}
            order={pageTechnologies.params.order}
            orderBy={pageTechnologies.params.orderBy}
            searchByList={pageTechnologies.searchList}
            fnGetData={this.props.loadTechnologies}
            fnRemoveItem={::this.fnDeleteItems}
            fnUpdateItems={::this.fnUpdateItem}
            enableCellSelect
            limitList={pageTechnologies.rowsPerList}
            title="List of technologies"
            // searchButton
            selectOption
            removeItemOption
            addButton
            addButtonLink="/technologies/add"
            rowHeight={50}
          />
        </div>
      </div>
    )
  }
}
export default connect ( ({technologies}) => ({technologies}), {loadTechnologies, deleteTechnologyItem, editTechnologyItem, fnChangeNavigationBar })(TechnologiesList)
