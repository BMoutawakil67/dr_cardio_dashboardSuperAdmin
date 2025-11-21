import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/pages/dashboard/dashboard.vue'
import AdminDashboard from '@/views/pages/dashboard/admin-dashboard/admin-dashboard.vue'
import DoctorDashboard from '@/views/pages/dashboard/doctor-dashboard/doctor-dashboard.vue'
import PatientDashboard from '@/views/pages/dashboard/patient-dashboard/patient-dashboard.vue'
import Calendar from '@/views/pages/uiinterface/calendar'
import Basictable from '@/views/pages/uiinterface/table/basictable'
import Datatable from '@/views/pages/uiinterface/table/datatable'
import Tables from '@/views/pages/uiinterface/table/tables.vue'
import Formbasicinput from '@/views/pages/uiinterface/form/formbasic/formbasicinput'
import Forminput from '@/views/pages/uiinterface/form/forminput/forminput'
import FormHorizontal from '@/views/pages/uiinterface/form/formhorizontal/horizontal'
import Formmask from '@/views/pages/uiinterface/form/formmask/formmask'
import Formselect2 from '@/views/pages/uiinterface/form/formselect2'
import Formfileupload from '@/views/pages/uiinterface/form/formfileupload'
import Formvalidation from '@/views/pages/uiinterface/form/formvalidation'
import Formvertical from '@/views/pages/uiinterface/form/formvertical'
import Forms from '@/views/pages/uiinterface/form/forms.vue'
import Iconfontawesome from '@/views/pages/uiinterface/icons/icon-fontawesome'
import Iconfeather from '@/views/pages/uiinterface/icons/icon-feather'
import Iconionic from '@/views/pages/uiinterface/icons/icon-ionic'
import Iconmaterial from '@/views/pages/uiinterface/icons/icon-material'
import Iconpe7 from '@/views/pages/uiinterface/icons/icon-pe7'
import Iconsimpleline from '@/views/pages/uiinterface/icons/icon-simpleline'
import Iconthemify from '@/views/pages/uiinterface/icons/icon-themify'
import Iconweather from '@/views/pages/uiinterface/icons/icon-weather'
import Icontypicon from '@/views/pages/uiinterface/icons/icon-typicon'
import Iconflag from '@/views/pages/uiinterface/icons/icon-flag'
import Icons from '@/views/pages/uiinterface/icons/icons.vue'
import Chartapex from '@/views/pages/uiinterface/chart/apex/chart-apex'
import Chartc3 from '@/views/pages/uiinterface/chart/c3/chart-c3'
import Chartflot from '@/views/pages/uiinterface/chart/flot/chart-flot'
import Chartjs from '@/views/pages/uiinterface/chart/js/chart-js'
import Chartmorris from '@/views/pages/uiinterface/chart/morris/chart-morris'
import Charts from '@/views/pages/uiinterface/chart/charts.vue'
import Ribbon from '@/views/pages/uiinterface/elements/ribbon.vue'
import Rating from '@/views/pages/uiinterface/elements/rating.vue'
import Clipboard from '@/views/pages/uiinterface/elements/clipboard'
import Dragdrop from '@/views/pages/uiinterface/elements/drag-drop'
import Texteditor from '@/views/pages/uiinterface/elements/text-editor'
import Counter from '@/views/pages/uiinterface/elements/counter'
import Scrollbar from '@/views/pages/uiinterface/elements/scrollbar'
import Notificationelement from '@/views/pages/uiinterface/elements/notificationelement'
import Stickynote from '@/views/pages/uiinterface/elements/stickynote'
import Timeline from '@/views/pages/uiinterface/elements/timeline'
import Horizontaltimeline from '@/views/pages/uiinterface/elements/horizontal-timeline'
import Formwizard from '@/views/pages/uiinterface/elements/form-wizard'
import Elements from '@/views/pages/uiinterface/elements/elements.vue'
import AccordionsUi from '@/views/pages/uiinterface/baseui/accordions/accordions'
import AlertsUi from '@/views/pages/uiinterface/baseui/alerts'
import AvatarUi from '@/views/pages/uiinterface/baseui/avatar'
import BadgesUi from '@/views/pages/uiinterface/baseui/badges/badges'
import ButtongroupUi from '@/views/pages/uiinterface/baseui/buttongroup'
import ButtonsUi from '@/views/pages/uiinterface/baseui/buttons'
import BreadcrumbsUi from '@/views/pages/uiinterface/baseui/breadcrumbs'
import CardsUi from '@/views/pages/uiinterface/baseui/cards'
import CarouselUi from '@/views/pages/uiinterface/baseui/carousel/carousel'
import DropdownsUi from '@/views/pages/uiinterface/baseui/dropdowns'
import GridUi from '@/views/pages/uiinterface/baseui/grid'
import ImagesUi from '@/views/pages/uiinterface/baseui/images'
import LightboxUi from '@/views/pages/uiinterface/baseui/lightbox/lightbox'
import MediaUi from '@/views/pages/uiinterface/baseui/media'
import ModalUi from '@/views/pages/uiinterface/baseui/modal/modal'
import OffcanvasUi from '@/views/pages/uiinterface/baseui/offcanvas/offcanvas'
import PaginationUi from '@/views/pages/uiinterface/baseui/pagination'
import ProgressUi from '@/views/pages/uiinterface/baseui/progress/progress'
import PlaceholdersUi from '@/views/pages/uiinterface/baseui/placeholders'
import PopoverUi from '@/views/pages/uiinterface/baseui/popover'
import RangesliderUi from '@/views/pages/uiinterface/baseui/rangeslider'
import SpinnersUi from '@/views/pages/uiinterface/baseui/spinners'
import SweetalertsUi from '@/views/pages/uiinterface/baseui/sweetalerts'
import TabUi from '@/views/pages/uiinterface/baseui/tab/tab'
import ToastrUi from '@/views/pages/uiinterface/baseui/toastr'
import TooltipUi from '@/views/pages/uiinterface/baseui/tooltip'
import TypographyUi from '@/views/pages/uiinterface/baseui/typography'
import VideoUi from '@/views/pages/uiinterface/baseui/video'
import Baseui from '@/views/pages/uiinterface/baseui/baseui.vue'
import Login from '@/views/pages/pages/login.vue'
import Register from '@/views/pages/pages/register.vue'
import Forgot_Paasword from '@/views/pages/pages/forgot-password.vue'
import Change_Password2 from '@/views/pages/pages/change-password2.vue'
import Lock_Screen from '@/views/pages/pages/lock-screen.vue'
import Doctor_List from '@/views/pages/doctor/doctor-list.vue'
import Doctors from '@/views/pages/doctor/doctors.vue'
import AddDoctors from '@/views/pages/doctor/add-doctor.vue'
import EditDoctors from '@/views/pages/doctor/edit-doctor.vue'
import Doctor_Profile from '@/views/pages/doctor/doctor-profile/doctor-profile.vue'
import Doctor_Setting from '@/views/pages/doctor/doctor-setting/doctor-setting.vue'
import Patients from '@/views/pages/patients/patients.vue'
import Patients_List from '@/views/pages/patients/patients-list.vue'
import AddPatients from '@/views/pages/patients/add-patient.vue'
import EditPatients from '@/views/pages/patients/edit-patient.vue'
import Patient_Profile from '@/views/pages/patients/patient-profile/patient-profile.vue'
import Patient_Setting from '@/views/pages/patients/patient-setting/patient-setting.vue'
import Blogs from '@/views/pages/blog/blogs.vue'
import Blog_List from '@/views/pages/blog/blog-list.vue'
import Blog_Details from '@/views/pages/blog/blog-details/blog-details.vue'
import Addblog from '@/views/pages/blog/add-blog.vue'
import Editblog from '@/views/pages/blog/edit-blog.vue'
import Email from '@/views/pages/email/email.vue'
import Compose from '@/views/pages/email/compose.vue'
import Mail_View from '@/views/pages/email/mail-view.vue'
import Inbox from '@/views/pages/email/inbox.vue'
import Calls from '@/views/pages/calls/calls.vue'
import Voice_Call from '@/views/pages/calls/voice-call.vue'
import Video_Call from '@/views/pages/calls/video-call.vue'
import Incoming_Call from '@/views/pages/calls/incoming-call.vue'
import Invoice from '@/views/pages/invoice/invoices.vue'
import Invoice_List from '@/views/pages/invoice/invoice-list/invoice-list.vue'
import Invoices_Settings from '@/views/pages/invoice/invoice-settings/invoice-settings.vue'
import Bank_Settings from '@/views/pages/invoice/invoice-settings/bank-settings.vue'
import Tax_Settings from '@/views/pages/invoice/invoice-settings/tax-settings.vue'
import View_Invoice from '@/views/pages/invoice/view-invoice.vue'
import Add_Invoice from '@/views/pages/invoice/add-invoice/add-invoice.vue'
import Edit_Invoices from '@/views/pages/invoice/edit-invoices/edit-invoices.vue'
import Invoices_Grid from '@/views/pages/invoice/invoice-grid/invoice-grid.vue'
import Invoices_Paid from '@/views/pages/invoice/invoice-list/invoicepaid.vue'
import Invoices_Overdue from '@/views/pages/invoice/invoice-list/invoiceoverdue.vue'
import Invoices_Draft from '@/views/pages/invoice/invoice-list/invoicedraft.vue'
import Invoices_Recurring from '@/views/pages/invoice/invoice-list/invoicerecurring.vue'
import Invoices_Cancelled from '@/views/pages/invoice/invoice-list/invoicecancelled.vue'
import Staff from '@/views/pages/staff/staff.vue'
import StaffList from '@/views/pages/staff/staff-list.vue'
import EditStaff from '@/views/pages/staff/edit-staff.vue'
import AddStaff from '@/views/pages/staff/add-staff.vue'
import StaffProfile from '@/views/pages/staff/staff-profile.vue'
import StaffSetting from '@/views/pages/staff/staff-setting.vue'
import StaffLeave from '@/views/pages/staff/staff-leave.vue'
import StaffHoliday from '@/views/pages/staff/staff-holiday.vue'
import StaffAttendance from '@/views/pages/staff/staff-attendance.vue'
import Appointments from '@/views/pages/appointments/appointments.vue'
import AppointmentsList from '@/views/pages/appointments/appointments-list.vue'
import AddAppointments from '@/views/pages/appointments/add-appointment.vue'
import EditAppointments from '@/views/pages/appointments/edit-appointment.vue'
import DoctorSchedule from '@/views/pages/doctor-schedule/doctor-schedule.vue'
import Schedule from '@/views/pages/doctor-schedule/schedule.vue'
import AddSchedule from '@/views/pages/doctor-schedule/add-schedule.vue'
import EditSchedule from '@/views/pages/doctor-schedule/edit-schedule.vue'
import Departments from '@/views/pages/departments/departments.vue'
import DepartmentList from '@/views/pages/departments/department-list.vue'
import AddDepartment from '@/views/pages/departments/add-department.vue'
import EditDepartment from '@/views/pages/departments/edit-department.vue'
import Accounts from '@/views/pages/accounts/accounts.vue'
import Invoices from '@/views/pages/accounts/invoices.vue'
import CreateInvoice from '@/views/pages/accounts/create-invoice.vue'
import EditInvoice from '@/views/pages/accounts/edit-invoice.vue'
import Payments from '@/views/pages/accounts/payments.vue'
import AddPayment from '@/views/pages/accounts/add-payment.vue'
import EditPayment from '@/views/pages/accounts/edit-payment.vue'
import Expenses from '@/views/pages/accounts/expenses.vue'
import AddExpense from '@/views/pages/accounts/add-expense.vue'
import EditExpense from '@/views/pages/accounts/edit-expense.vue'
import Taxes from '@/views/pages/accounts/taxes.vue'
import AddTax from '@/views/pages/accounts/add-tax.vue'
import EditTax from '@/views/pages/accounts/edit-tax.vue'
import ProvidentFund from '@/views/pages/accounts/provident-fund.vue'
import AddProvidentFund from '@/views/pages/accounts/add-provident-fund.vue'
import EditProvidentFund from '@/views/pages/accounts/edit-provident-fund.vue'

import Settings from '@/views/pages/settings/settings.vue'
import General_Settings from '@/views/pages/settings/general-settings.vue'
import Localization_Details from '@/views/pages/settings/localization-details.vue'
import Payment_Settings from '@/views/pages/settings/payment-settings.vue'
import Email_Settings from '@/views/pages/settings/email-settings.vue'
import Social_Settings from '@/views/pages/settings/social-settings.vue'
import Social_Links from '@/views/pages/settings/social-links.vue'
import Seo_Settings from '@/views/pages/settings/seo-settings.vue'
import Theme_Settings from '@/views/pages/settings/theme-settings.vue'
import Change_Password from '@/views/pages/settings/change-password.vue'
import Others_Settings from '@/views/pages/settings/others-settings.vue'
import Assets from '@/views/pages/assets/assets.vue'
import Assets_List from '@/views/pages/assets/assets-list.vue'
import Add_Assets from '@/views/pages/assets/add-assets.vue'
import Edit_Assets from '@/views/pages/assets/edit-assets.vue'
import Payroll from '@/views/pages/payroll/payroll.vue'
import Salary from '@/views/pages/payroll/salary.vue'
import AddSalary from '@/views/pages/payroll/add-salary.vue'
import EditSalary from '@/views/pages/payroll/edit-salary.vue'
import SalaryView from '@/views/pages/payroll/salary-view.vue'
import Chat from '@/views/pages/chat/chat.vue'
import AddLeave from '@/views/pages/staff/add-leave.vue'
import EditLeave from '@/views/pages/staff/edit-leave.vue'
import Activities from '@/views/pages/activities/activities.vue'
import Activities_List from '@/views/pages/activities/activities-list.vue'
import Reports from '@/views/pages/reports/reports.vue'
import Expense_Reports from '@/views/pages/reports/expense-reports.vue'
import Invoice_Reports from '@/views/pages/reports/invoice-reports.vue'
import Profile from '@/views/pages/pages/profile.vue'
import Edit_Profile from '@/views/pages/pages/edit-profile.vue'
import Gallery from '@/views/pages/pages/gallery.vue'
import Error_500 from '@/views/pages/pages/error-500.vue'
import Error_404 from '@/views/pages/pages/error-404.vue'
import Blank_Page from '@/views/pages/pages/blank-page.vue'
import InvoiceView from '@/views/pages/accounts/invoice-view.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/change-password2',
    name: 'change-password2',
    component: Change_Password2
  },
  {
    path: '/forgot-password',
    name: 'forgot-password2',
    component: Forgot_Paasword
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: Lock_Screen
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/edit-profile',
    name: 'edit-profile',
    component: Edit_Profile
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: Error_404
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: Error_500
  },
  {
    path: '/blank-page',
    name: 'blank-page',
    component: Blank_Page
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', redirect: '/dashboard/admin-dashboard' },
      { path: "admin-dashboard", component: AdminDashboard },
      { path: "doctor-dashboard", component: DoctorDashboard },
      { path: "patient-dashboard", component: PatientDashboard },
    ]
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/tables',
    component: Tables,
    children: [
      { path: '', redirect: '/tables/tables-basic' },
      { path: "tables-basic", component: Basictable },
      { path: "tables-datatables", component: Datatable },
    ]
  },
  {
    path: '/icons',
    component: Icons,
    children: [
      { path: '', redirect: '/icons/icon-fontawesome' },
      { path: "icon-fontawesome", component: Iconfontawesome },
      { path: "icon-feather", component: Iconfeather },
      { path: "icon-ionic", component: Iconionic },
      { path: "icon-material", component: Iconmaterial },
      { path: "icon-pe7", component: Iconpe7 },
      { path: "icon-simpleline", component: Iconsimpleline },
      { path: "icon-themify", component: Iconthemify },
      { path: "icon-weather", component: Iconweather },
      { path: "icon-typicon", component: Icontypicon },
      { path: "icon-flag", component: Iconflag },
    ]
  },
  {
    path: '/forms',
    component: Forms,
    children: [
      { path: '', redirect: '/forms/form-basic-inputs' },
      { path: "form-basic-inputs", component: Formbasicinput },
      { path: "form-input-groups", component: Forminput },
      { path: "form-horizontal", component: FormHorizontal },
      { path: "form-mask", component: Formmask },
      { path: "form-validation", component: Formvalidation },
      { path: "form-select2", component: Formselect2 },
      { path: "form-fileupload", component: Formfileupload },
      { path: "form-vertical", component: Formvertical },
    ]
  },
  {
    path: '/charts',
    component: Charts,
    children: [
      { path: '', redirect: '/charts/chart-apex' },
      { path: "chart-apex", component: Chartapex },
      { path: "chart-c3", component: Chartc3 },
      { path: "chart-flot", component: Chartflot },
      { path: "chart-js", component: Chartjs },
      { path: "chart-morris", component: Chartmorris }
    ]
  },
  {
    path: '/elements',
    component: Elements,
    children: [
      { path: '', redirect: '/elements/ribbon' },
      { path: "ribbon", component: Ribbon },
      { path: "drag-drop", component: Dragdrop },
      { path: "rating", component: Rating },
      { path: "clipboard", component: Clipboard },
      { path: "text-editor", component: Texteditor },
      { path: "counter", component: Counter },
      { path: "scrollbar", component: Scrollbar },
      { path: "notification", component: Notificationelement },
      { path: "stickynote", component: Stickynote },
      { path: "timeline", component: Timeline },
      { path: "horizontal-timeline", component: Horizontaltimeline },
      { path: "form-wizard", component: Formwizard },
    ]
  },
  {
    path: '/baseui',
    component: Baseui,
    children: [
      { path: '', redirect: '/baseui/accordions' },
      { path: "accordions", component: AccordionsUi },
      { path: "alerts", component: AlertsUi },
      { path: "avatar", component: AvatarUi },
      { path: "badges", component: BadgesUi },
      { path: "buttongroup", component: ButtongroupUi },
      { path: "buttons", component: ButtonsUi },
      { path: "breadcrumbs", component: BreadcrumbsUi },
      { path: "cards", component: CardsUi },
      { path: "carousel", component: CarouselUi },
      { path: "dropdowns", component: DropdownsUi },
      { path: "grid", component: GridUi },
      { path: "images", component: ImagesUi },
      { path: "lightbox", component: LightboxUi },
      { path: "media", component: MediaUi },
      { path: "modals", component: ModalUi },
      { path: "offcanvas", component: OffcanvasUi },
      { path: "pagination", component: PaginationUi },
      { path: "progress", component: ProgressUi },
      { path: "placeholders", component: PlaceholdersUi },
      { path: "popover", component: PopoverUi },
      { path: "rangeslider", component: RangesliderUi },
      { path: "spinners", component: SpinnersUi },
      { path: "sweetalerts", component: SweetalertsUi },
      { path: "tab", component: TabUi },
      { path: "toastr", component: ToastrUi },
      { path: "tooltip", component: TooltipUi },
      { path: "typography", component: TypographyUi },
      { path: "video", component: VideoUi },
    ]
  },
  {
    path: '/doctors',
    component: Doctors,
    children: [
      { path: '', redirect: '/doctor/doctors' },
      { path: "doctors-list", component: Doctor_List },
      { path: "add-doctor", component: AddDoctors },
      { path: "edit-doctor", component: EditDoctors },
      { path: "doctor-profile", component: Doctor_Profile },
      { path: "doctor-setting", component: Doctor_Setting },
    ]
  },
  {
    path: '/patients',
    component: Patients,
    children: [
      { path: '', redirect: '/patient/patients-list' },
      { path: "patients-list", component: Patients_List },
      { path: "add-patient", component: AddPatients },
      { path: "edit-patient", component: EditPatients },
      { path: "patient-profile", component: Patient_Profile },
      { path: "patient-setting", component: Patient_Setting },
    ]
  },
  {
    path: '/blog',
    component: Blogs,
    children: [
      { path: '', redirect: '/blog/blog' },
      { path: "blog", component: Blog_List },
      { path: "blog-details", component: Blog_Details },
      { path: "add-blog", component: Addblog },
      { path: "edit-blog", component: Editblog },
    ]
  },
  {
    path: '/email',
    component: Email,
    children: [
      { path: '', redirect: '/email/compose' },
      { path: "compose", component: Compose },
      { path: "mail-view", component: Mail_View },
      { path: "inbox", component: Inbox },
    ]
  },
  {
    path: '/call',
    component: Calls,
    children: [
      { path: '', redirect: '/call/voice-call' },
      { path: "voice-call", component: Voice_Call },
      { path: "video-call", component: Video_Call },
      { path: "incoming-call", component: Incoming_Call },
    ]
  },
  {
    path: '/invoice',
    component: Invoice,
    children: [
      { path: '', redirect: '/invoice/invoices-list' },
      { path: "invoices-list", component: Invoice_List },
      { path: "invoices-settings", component: Invoices_Settings },
      { path: "bank-settings", component: Bank_Settings },
      { path: "tax-settings", component: Tax_Settings },
      { path: "view-invoice", component: View_Invoice },
      { path: "add-invoice", component: Add_Invoice },
      { path: "edit-invoices", component: Edit_Invoices },
      { path: "invoices-grid", component: Invoices_Grid },
      { path: "invoices-paid", component: Invoices_Paid },
      { path: "invoices-overdue", component: Invoices_Overdue },
      { path: "invoices-draft", component: Invoices_Draft },
      { path: "invoices-recurring", component: Invoices_Recurring },
      { path: "invoices-cancelled", component: Invoices_Cancelled },
    ]
  },
 {
  path: '/staff',
  component: Staff,
  children: [
    {path: '', redirect: '/staff/staff-list'},
    {path: 'staff-list', component: StaffList },
    {path: 'edit-staff', component: EditStaff },
    {path: 'add-staff', component: AddStaff },
    {path: 'staff-profile', component: StaffProfile },
    {path: 'staff-setting', component: StaffSetting },
    {path: 'staff-leave', component: StaffLeave },
    {path: 'staff-holiday', component: StaffHoliday },
    {path: 'staff-attendance', component: StaffAttendance },
    {path: 'add-leave', component: AddLeave },
    {path: 'edit-leave', component: EditLeave },
  ]
 },
 {
  path: '/appointments',
  component: Appointments,
  children: [
    {path: '', redirect: '/appointments/appointments-list' },
    {path: 'appointments-list', component: AppointmentsList },
    {path: 'add-appointment', component: AddAppointments },
    {path: 'edit-appointment', component: EditAppointments },
  ]
 },
 {
  path: '/doctor-schedule',
  component: DoctorSchedule,
  children: [
    {path: '', redirect: '/doctor-schedule/schedule'},
    {path: 'schedule', component: Schedule },
    {path: 'add-schedule', component: AddSchedule },
    {path: 'edit-schedule', component: EditSchedule }
  ]
 },
 {
  path: '/departments',
  component: Departments,
  children: [
    {path: '', redirect: '/departments/department-list'},
    {path: 'department-list', component: DepartmentList},
    {path: 'add-department', component: AddDepartment},
    {path: 'edit-department', component: EditDepartment},
  ]
 },
 {
  path: '/accounts',
  component: Accounts,
  children: [
    {path: '', redirect: '/accounts/invoices'},
    {path: 'invoices', component: Invoices},
    {path: 'create-invoice', component: CreateInvoice},
    {path: 'edit-invoice', component: EditInvoice},
    {path: 'payments', component: Payments},
    {path: 'add-payment', component: AddPayment},
    {path: 'edit-payment', component: EditPayment},
    {path: 'edit-payment', component: EditPayment},
    {path: 'expenses', component: Expenses},
    {path: 'add-expense', component: AddExpense},
    {path: 'edit-expense', component: EditExpense},
    {path: 'taxes', component: Taxes},
    {path: 'add-tax', component: AddTax},
    {path: 'edit-tax', component: EditTax},
    {path: 'provident-fund', component: ProvidentFund},
    {path: 'add-provident-fund', component: AddProvidentFund},
    {path: 'edit-provident-fund', component: EditProvidentFund},
    {path: 'invoice-view', component: InvoiceView},
  ]
},
{
  path: '/settings',
  component: Settings,
  children: [
    {path: '', redirect: '/settings/settings'},
    {path: 'settings', component: General_Settings },
    {path: 'localization-details', component: Localization_Details },
    {path: 'payment-settings', component: Payment_Settings },
    {path: 'email-settings', component: Email_Settings },
    {path: 'social-settings', component: Social_Settings },
    {path: 'social-links', component: Social_Links },
    {path: 'seo-settings', component: Seo_Settings },
    {path: 'theme-settings', component: Theme_Settings },
    {path: 'change-password', component: Change_Password },
    {path: 'others-settings', component: Others_Settings },
  ]
 },
 {
  path: '/assets',
  component: Assets,
  children: [
    {path: '', redirect: '/assets/assets-list'},
    {path: 'assets-list', component: Assets_List },
    {path: 'add-asset', component: Add_Assets },
    {path: 'edit-asset', component: Edit_Assets },
  ]
 },
 {
  path: '/payroll',
  component: Payroll,
  children: [
    {path: '', redirect: '/payroll/salary'},
    {path: 'salary', component: Salary},
    {path: 'add-salary', component: AddSalary},
    {path: 'edit-salary', component: EditSalary},
    {path: 'salary-view', component: SalaryView}
  ]
},
{
  path: '/activities',
  component: Activities,
  children: [
    {path: '', redirect: '/activities/activities'},
    {path: 'activities', component: Activities_List },
  ]
 },
 {
  path: '/reports',
  component: Reports,
  children: [
    {path: '', redirect: '/reports/expense-reports'},
    {path: 'expense-reports', component: Expense_Reports },
    {path: 'invoice-reports', component: Invoice_Reports },
  ]
 }
];


export const router = createRouter({
  history: createWebHistory('/vue/template/'),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Continue with the navigation
  next();
});
