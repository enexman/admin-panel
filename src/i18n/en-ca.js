const COMMON = {}

export default {
  Errors: {
    ...COMMON,
    Email: 'Invalid Email',
    Invalid: 'Invalid "%{label}',
    Length: 'The "%{label}" must be more than %{min} and less than %{max} characters long',
    Numeric: 'The "%{label}" must be numeric',
    Password: 'The "%{label}" must be more than %{min} and less than %{max} characters long'
  },
  Labels: {
    ...COMMON,
    Active: 'Active',
    hintText: 'Enter %{label}',
    FirstName: 'First name',
    LastName: 'Last name',
    Email: 'Email'
  },
  Buttons: {
    Cancel: 'Cancel',
    Close: 'Close',
    Reload: 'Reload',
    Report: 'Report',
    Add: 'Add',
    Edit: 'Edit',
    OK: 'OK'
  },

  Login: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    password: 'Password',
    passwordLabel: 'Enter password',
    loginButton: 'Login',
    registration: 'Register now!',
    forgotPass: 'Forgot password?'
  },
  Registration: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    password: 'Password',
    passwordLabel: 'Enter password',
    passwordConfirm: 'Confirm password',
    passwordLabelConfirm: 'Enter password',
    registrationButton: 'Registration',
    login: 'Login now!'
  },
  RestorePass: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    restoreButton: 'Restore password',
    login: 'Login now!'
  },
  NewPass: {
    ...COMMON,
    password: 'Password',
    passwordLabel: 'Enter password',
    passwordConfirm: 'Confirm password',
    passwordLabelConfirm: 'Enter password',
    changeButton: 'Change password',
    login: 'Login now!'
  },
  Sidebar: {
    ...COMMON,
    brand: 'SSIS Control panel',
    generalMenuLabel: 'General',
    moreMenuLabel: 'More',
    dashboardMenuItem: 'Dashboard',
    organizationMenuItem: 'Organizations',
    HOWMenuItem: 'HOW',
    supportWorkerMenuItem: 'Support workers',
    overviewMenuItem: 'Overview',
    managersMenuItem: 'Managers',
    hospitalsMenuItem: 'Hospitals',
    viewersMenuItem: 'Viewers',
    adminMenuItem: 'Admins',
    physiciansMenuItem: 'Physicians',
    patientsMenuItem: 'Patients',
    usersMenuItem: 'Users',
    componentsMenuItem: 'Components',
    contactsMenuItem: 'Contacts',
    FAQMenuItem: 'FAQ',
    emailMenuItem: 'Email',
    settingsMenuItem: 'Settings',
    profileMenuItem: 'Profile',
    tableMenuItem: 'Tables',
    xeditableMenuItem: 'Xeditable',
    toastsMenuItem: 'Toasts',
    otherMenuItem: 'Order',
    settingsMenuGeneral: 'General'
  },
  NotFoundPage: {
    ...COMMON,
    homeButton: 'Go home',
    textError: 'The site configured at this address does not contain the requested file.',
    nameError: 'Page not found'
  },
  DashboardPage: {
    ...COMMON,
    lineChart: 'LineChart',
    barChart: 'BarChart',
    areaChart: 'AreaChart',
    composedChart: 'ComposedChart',
    scatterChart: 'ScatterChart',
    radialBarChart: 'RadialBarChart',
    radarChart: 'RadarChart',
    namePage: 'Dashboard'
  },
  ProfilePage: {
    ...COMMON,
    profession: 'Profession',
    visits: 'Visits',
    office: 'Office',
    namePage: 'Profile'
  },
  SettingsPage: {
    ...COMMON,
    namePage: 'Settings'
  },
  OtherPage: {
    ...COMMON,
    namePage: 'Other',
    sliderSimple: 'Simple examples',
    sliderDisabled: 'Disabled examples',
    sliderStepped: 'Stepped example',
    sliderControlled: 'Controlled Examples',
    sliderAlternativeAxis: 'Alternative Axis Examples',
    collapsibleSimple: 'Collapsible simple',
    select: 'Select'
  },
  XeditablePage: {
    ...COMMON,
    namePage: 'Xeditable'
  },
  HOWPage: {
    ...COMMON,
    namePage: 'HOW',
    tableName: 'List HOW',
    add: 'Add new HOW',
    edit: 'Edit current HOW'
  },
  ToastsPage: {
    ...COMMON,
    namePage: 'Toasts'
  },
  TablesPage: {
    ...COMMON,
    namePage: 'Tables',
    tableName: 'Example table'
  },
  OverviewPage: {
    ...COMMON,
    namePage: 'Overview organization'
  },
  AdminsPage: {
    ...COMMON,
    namePage: 'Admins',
    tableName: 'List admins',
    add: 'Add new Admin',
    edit: 'Edit current Admin'
  },
  ManagersPage: {
    ...COMMON,
    namePage: 'Managers',
    tableName: 'List managers',
    add: 'Add new Managers',
    edit: 'Edit current Managers'
  },
  SupportWorkerPage: {
    ...COMMON,
    namePage: 'Support workers',
    tableName: 'List support workers',
    add: 'Add new Support worker',
    edit: 'Edit current Support worker'
  },
  OrganizationsPage: {
    ...COMMON,
    namePage: 'Organizations',
    tableName: 'List organizations',
    add: 'Add new Organization',
    edit: 'Edit current Organization'
  },
  ViewersPage: {
    ...COMMON,
    namePage: 'Viewers',
    tableName: 'List viewers',
    add: 'Add new Viewer',
    edit: 'Edit current Viewer'
  },
  HospitalsPage: {
    ...COMMON,
    namePage: 'Hospitals',
    tableName: 'List hospitals',
    add: 'Add new Hospital',
    edit: 'Edit current Hospital'
  },
  EmailPage: {
    ...COMMON,
    namePage: 'Email'
  },
  PhysiciansPage: {
    ...COMMON,
    namePage: 'Physicians',
    tableName: 'List physicians',
    add: 'Add new Physician',
    edit: 'Edit current Physician'
  },
  PatientsPage: {
    ...COMMON,
    namePage: 'Patients',
    tableName: 'List patients',
    add: 'Add new Patients',
    edit: 'Edit current Patients'
  },
  ContactsPage: {
    ...COMMON,
    namePage: 'Contacts'
  },
  FAQPage: {
    ...COMMON,
    namePage: 'FAQ'
  },
  Languages: {
    ...COMMON,
    'en-CA': 'English (Canada)',
    'en-US': 'English (United States)',
    'es-MX': 'Spanish (Mexico)',
    'fr-CA': 'French (Canada)'
  },
  HeaderTools: {
    ...COMMON,
    labelLanguage: 'Language',
    labelFullScreen: 'FullScreen',
    labelNotifications: 'Notifications',
    labelTools: 'Tools',
    toolsMenuItemProfile: 'Profile',
    toolsMenuItemSettings: 'Settings',
    toolsMenuItemLogout: 'Logout'
  }
}
