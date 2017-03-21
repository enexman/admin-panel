/* eslint-disable */
import { DateFormat } from '../components/pages/componentsPages'

const COMMON_TABLE_PARAMS = {
  limit: 10,
  offset: 0,
  order: '',
  orderBy: '',
  search: '',
  searchBy: 'Any'
}

const EDITABLE_RESIZABLE_SORTABLE = {
  editable: true,
  resizable: true,
  sortable: true
}

const RESIZABLE_SORTABLE = {
  resizable: true,
  sortable: true
}

const ANY_FIELD = {
  key: 'Any',
  name: 'Any'
}

const EMAIL_FIELD = {
  key: 'Email',
  name: 'Email'
}

const FIRST_NAME_FIELD = {
  key: 'FirstName',
  name: 'First name'
}

const LAST_NAME_FIELD = {
  key: 'LastName',
  name: 'Last name'
}


const LAST_AUTHENTICATED_DATE_FIELD = {
  key: 'LastAuthenticatedDate',
  name: 'Last authenticated date'
}

const ID = {
  key: 'ID',
  name: 'ID'
}

const TITLE = {
  key: 'Title',
  name: 'Title'
}

const CUSTOMER = {
  key: 'Customer',
  name: 'Customer'
}

const STATUS = {
  key: 'Status',
  name: 'Status'
}

const NAME = {
  key: 'Name',
  name: 'Name'
}

const COMMENT = {
  key: 'Comment',
  name: 'Comment'
}

const IMAGE_ID = {
  key: 'ImageId',
  name: 'Image id'
}

export const pageClients = {
  params: {
    ...COMMON_TABLE_PARAMS
  },
  tableColumns: [
    {
      ...NAME,
      ...EDITABLE_RESIZABLE_SORTABLE
    },
    {
      ...COMMENT,
      ...EDITABLE_RESIZABLE_SORTABLE
    }
  ],
  rowsPerList: [5, 10, 20, 50, 100],
  searchList: [
    ANY_FIELD,
    NAME,
    COMMENT
  ]
}

export const pageTechnologies = {
  params: {
    ...COMMON_TABLE_PARAMS
  },
  tableColumns: [
    {
      ...NAME,
      ...EDITABLE_RESIZABLE_SORTABLE
    }
  ],
  rowsPerList: [5, 10, 20, 50, 100],
  searchList: [
    ANY_FIELD,
    NAME
  ]
}

export const pageCategories = {
  params: {
    ...COMMON_TABLE_PARAMS
  },
  tableColumns: [
    {
      ...NAME,
      ...EDITABLE_RESIZABLE_SORTABLE
    }
  ],
  rowsPerList: [5, 10, 20, 50, 100],
  searchList: [
    ANY_FIELD,
    NAME
  ]
}

export const pageWorks = {
  params: {
    ...COMMON_TABLE_PARAMS
  },
  tableColumns: [
    {
      ...TITLE,
      ...EDITABLE_RESIZABLE_SORTABLE
    },
    {
      ...CUSTOMER,
      ...EDITABLE_RESIZABLE_SORTABLE
    },
    {
      ...STATUS,
      ...EDITABLE_RESIZABLE_SORTABLE,
      sortable: false
    }
  ],
  rowsPerList: [5, 10, 20, 50, 100],
  searchList: [
    ANY_FIELD,
    TITLE,
    CUSTOMER,
    STATUS
  ]
}
