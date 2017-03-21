/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories, deleteCategoryItem, editCategoryItem, fnChangeNavigationBar } from '../../../actions'
import Table from '../../components/table'
import { pageCategories } from '../../../data/enums'
import { TableActionsCategories } from '../componentsPages'


class CategoriesList extends Component {
  componentDidMount () {
    this.props.loadCategories()
  }

  componentWillReceiveProps (nextProps) {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of categories',
        url: ''
      }
    ])
  }

  fnGetTableColumns () {
    const DATA = pageCategories.tableColumns.slice(0)
    DATA.push({
      key: 'actions',
      name: 'Actions',
      width: 70,
      formatter: <TableActionsCategories dialog={this} />
    })
    return DATA
  }

  fnUpdateItem (id, key, value) {
    let params = {
      Name: '',
      ImageId: ''
    }
    params[key] = value
    this.props.editCategoryItem(id, params.Name, params.ImageId)
  }

  fnDeleteItems (selected, data) {
    selected.map(obj => {
      this.props.deleteCategoryItem(data[obj].Id)
    })
  }

  render () {
    const { categories, loading } = this.props.categories
    // console.log(categories)
    let categoriesList = []
    if (!loading) {
      categoriesList = categories.data.map( category => {
        return {
          Id: category.id,
          Name: category.name,
          ImageId: category.image_id,
          actions: {
            Id: category.id,
            Name: category.name,
            ImageId: category.image_id
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
            ref="MyTableCategoriesListPage"
            data={{
              iTotalRecords: 5,
              tableData: categoriesList
            }}
            limit={pageCategories.params.limit}
            offset={pageCategories.params.offset}
            search={pageCategories.params.search}
            searchBy={pageCategories.params.searchBy}
            order={pageCategories.params.order}
            orderBy={pageCategories.params.orderBy}
            searchByList={pageCategories.searchList}
            fnGetData={this.props.loadCategories}
            fnRemoveItem={::this.fnDeleteItems}
            fnUpdateItems={::this.fnUpdateItem}
            enableCellSelect
            limitList={pageCategories.rowsPerList}
            title="List of categories"
            // searchButton
            selectOption
            removeItemOption
            addButton
            addButtonLink="/categories/add"
            rowHeight={50}
          />
        </div>
      </div>
    )
  }
}
export default connect ( ({categories}) => ({categories}), {loadCategories, deleteCategoryItem, editCategoryItem, fnChangeNavigationBar })(CategoriesList)
