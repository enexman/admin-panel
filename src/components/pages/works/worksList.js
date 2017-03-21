/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadWorks, deleteWorkItem, editWorkItem, fnChangeNavigationBar } from '../../../actions'
import Table from '../../components/table'
import { pageWorks } from '../../../data/enums'
import { TableActionsWorks } from '../componentsPages'
// import AddItem from '../../dialogs/worksPage/worksAddItem'
// import EditItem from '../../dialogs/worksPage/worksEditItem'

class WorksList extends Component {
  componentDidMount () {
    this.props.loadWorks()
  }

  componentWillReceiveProps (nextProps) {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of works',
        url: ''
      }
    ])
  }

  // fnOpenDialogAddWork () {
  //   this.refs.AddItem.getWrappedInstance().open()
  // }

  fnGetTableColumns () {
    const DATA = pageWorks.tableColumns.slice(0)
    DATA.push({
      key: 'actions',
      name: 'Actions',
      width: 70,
      formatter: <TableActionsWorks dialog={this} />
    })
    return DATA
  }

  fnUpdateItem (id, key, value) {
    let params = {
      Title: '',
      MetaKeyword: '',
      MetaDescription: '',
      Status: '',
      Customer: '',
      TechnologyText: '',
      URL: '',
      Body: '',
      ImageId: ''
    }
    params[key] = value
    this.props.editWorkItem(id, params.Title, params.MetaKeyword, params.MetaDescription, params.Status, params.Customer, params.TechnologyText, params.URL, params.Body , params.ImageId)
  }

  fnDeleteItems (selected, data) {
    selected.map(obj => {
      this.props.deleteWorkItem(data[obj].Id)
    })
  }

  render () {
    const { works, loading, update } = this.props.works
    let workList = []
    if (!loading) {
      workList = works.data.map( work => {
        return {
          Id: work.id,
          Title: work.title,
          MetaKeyword: work.meta_keyword,
          MetaDescription: work.meta_description,
          Customer: work.customer,
          Status: work.status,
          TechnologyText: work.technology_text,
          URL: work.url,
          Body: work.body,
          ImageId: work.image_id,
          actions: {
            Id: work.id,
            Title: work.title,
            MetaKeyword: work.meta_keyword,
            MetaDescription: work.meta_description,
            Customer: work.customer,
            Status: work.status,
            TechnologyText: work.technology_text,
            URL: work.url,
            Body: work.body,
            ImageId: work.image_id
          }
        }
      })
    }
    return (
      <div className="organizationPage wrapPage">
        <div className="table-page">
          {/* <AddItem ref="AddItem" />
          <EditItem ref="EditItem" /> */}
          <Table
            uid={null}
            columns={::this.fnGetTableColumns}
            ref="MyTableWorkListPage"
            data={{
              iTotalRecords: 5,
              tableData: workList
            }}
            limit={pageWorks.params.limit}
            offset={pageWorks.params.offset}
            search={pageWorks.params.search}
            searchBy={pageWorks.params.searchBy}
            order={pageWorks.params.order}
            orderBy={pageWorks.params.orderBy}
            searchByList={pageWorks.searchList}
            fnGetData={this.props.loadWorks}
            fnRemoveItem={::this.fnDeleteItems}
            // fnAddItems={::this.fnOpenDialogAddWork}
            // fnUpdateItems={::this.fnUpdateItem}
            enableCellSelect
            limitList={pageWorks.rowsPerList}
            title="List of works"
            // searchButton
            selectOption
            removeItemOption
            addButton
            addButtonLink="/works/add"
            rowHeight={50}
          />
        </div>
      </div>
    )
  }
}
export default connect ( ({works}) => ({works}), { loadWorks, deleteWorkItem, editWorkItem, fnChangeNavigationBar })(WorksList)
