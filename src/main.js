import { createApp } from 'vue';
import { router } from '@/router';
import App from "@/App.vue";
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import VCalendar from 'v-calendar';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import FlagIcon from 'vue-flag-icon';
import VueApexCharts from "vue3-apexcharts"
import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import StarRating from 'vue-star-rating'
import VueFeather from 'vue-feather';
import VueSweetalert2 from 'vue-sweetalert2' 
import Toaster from '@meforma/vue-toaster'
import Vue3Autocounter from 'vue3-autocounter';

/********* Layouts components **********/

import RecentPatients from '@/views/pages/dashboard/admin-dashboard/recent-patients.vue'
import UpcomingAppointments from '@/views/pages/dashboard/admin-dashboard/upcoming-appointments.vue'
import AppointmentRecent from '@/views/pages/dashboard/doctor-dashboard/appointment-recent.vue'
import BodyMaskHeight from '@/views/pages/dashboard/patient-dashboard/body-mask-height.vue'
import PatientContent from '@/views/pages/dashboard/patient-dashboard/patient-content.vue'
 
import Contexttable from '@/views/pages/uiinterface/table/contexttable'
import Inputsize from '@/views/pages/uiinterface/form/formbasic/inputsize.vue'
import Addressform from '@/views/pages/uiinterface/form/formhorizontal/addressform'
import Basicform from '@/views/pages/uiinterface/form/formhorizontal/basicform'
import Personaldetail from '@/views/pages/uiinterface/form/formhorizontal/personaldetail'
import Personalinformation from '@/views/pages/uiinterface/form/formhorizontal/personalinformation'
import LightBoxOne from '@/views/pages/uiinterface/baseui/lightbox/lightboxone.vue'
import LightBoxTwo from '@/views/pages/uiinterface/baseui/lightbox/lightboxtwo.vue'
import Bordered from '@/views/pages/uiinterface/baseui/accordions/bordered.vue'
import BorderedJustified from '@/views/pages/uiinterface/baseui/accordions/borderedjustified.vue'
import Default from '@/views/pages/uiinterface/baseui/accordions/default.vue'
import Justified from '@/views/pages/uiinterface/baseui/accordions/justified.vue'
import Questions from '@/views/pages/uiinterface/baseui/accordions/questions.vue'
import Vakal from '@/views/pages/uiinterface/baseui/accordions/vakal.vue'
import Verticalleft from '@/views/pages/uiinterface/baseui/accordions/verticalleft.vue'
import VerticalRight from '@/views/pages/uiinterface/baseui/accordions/verticalright.vue'
import Gradientbadges from '@/views/pages/uiinterface/baseui/badges/gradientbadges.vue'
import BadgesOne from '@/views/pages/uiinterface/baseui/badges/badgesone.vue'
import Pillbadges from '@/views/pages/uiinterface/baseui/badges/pillbadges.vue'
import Carouselthree from '@/views/pages/uiinterface/baseui/carousel/carouselthree.vue'
import Carouseltwo from '@/views/pages/uiinterface/baseui/carousel/carouseltwo.vue'
import Carouselone from '@/views/pages/uiinterface/baseui/carousel/carouselone.vue'
import Bootstrapmodal from '@/views/pages/uiinterface/baseui/modal/bootstrapmodal.vue'
import Custommodal from '@/views/pages/uiinterface/baseui/modal/custommodal.vue'
import Modelalert from '@/views/pages/uiinterface/baseui/modal/modalalert.vue'
import Multiplemodal from '@/views/pages/uiinterface/baseui/modal/multiplemodal.vue'
import Pagemodals from '@/views/pages/uiinterface/baseui/modal/pagemodals.vue'
import Positionmodal from '@/views/pages/uiinterface/baseui/modal/positionmodal.vue'
import Staticmodal from '@/views/pages/uiinterface/baseui/modal/staticmodal.vue'
import Backdrop from '@/views/pages/uiinterface/baseui/offcanvas/backdrop.vue'
import Offcanvasone from '@/views/pages/uiinterface/baseui/offcanvas/offcanvasone.vue'
import Placement from '@/views/pages/uiinterface/baseui/offcanvas/placement.vue'
import Largeprogress from '@/views/pages/uiinterface/baseui/progress/largeprogress.vue'
import Defaultprogress from '@/views/pages/uiinterface/baseui/progress/defaultprogress.vue'
import Mediumprogress from '@/views/pages/uiinterface/baseui/progress/mediumprogress.vue'
import Smallprogress from '@/views/pages/uiinterface/baseui/progress/smallprogress.vue'
import Extrasmallprogress from '@/views/pages/uiinterface/baseui/progress/extrasmallprogress.vue'
import Basictab from '@/views/pages/uiinterface/baseui/tab/basictab.vue'
import Bottomtab from '@/views/pages/uiinterface/baseui/tab/bottomtab.vue'
import Linetab from '@/views/pages/uiinterface/baseui/tab/linetab.vue'
import Roundtab from '@/views/pages/uiinterface/baseui/tab/roundtab.vue'
import Solidtab from '@/views/pages/uiinterface/baseui/tab/solidtab.vue'
import Profile from '@/views/pages/doctor/doctor-profile/profile.vue'
import Aboutme from '@/views/pages/doctor/doctor-profile/aboutme.vue'
import Setting_About from '@/views/pages/doctor/doctor-setting/setting-about.vue'
import Patientprofile from '@/views/pages/patients/patient-profile/patientprofile.vue'
import Patientabout from '@/views/pages/patients/patient-profile/patientabout.vue'
import Settings from '@/views/pages/patients/patient-setting/settings'
import Blog_Side from '@/views/pages/blog/blog-details/blog-side.vue'
import Details_List from '@/views/pages/blog/blog-details/details-list.vue'
import Email_Sidebar from '@/views/pages/email/email-sidebar.vue'
import Call_Sidebar from '@/views/pages/calls/call-sidebar.vue'
import Video_Sidebar from '@/views/pages/calls/video-sidebar.vue'
import Addcontent from '@/views/pages/invoice/add-invoice/addcontent.vue'
import AddContent1 from '@/views/pages/invoice/add-invoice/addcontent1'
import AddContent2 from '@/views/pages/invoice/add-invoice/addcontent2'
import Addtable from '@/views/pages/invoice/add-invoice/addtable'
import Add_Head from '@/views/pages/invoice/add-invoice/add-head.vue'
import Edittable from '@/views/pages/invoice/edit-invoices/edittable.vue'
import Editcontent from '@/views/pages/invoice/edit-invoices/editcontent.vue'
import Invoicefilter from '@/views/pages/invoice/invoice-grid/invoicefilter.vue'
import Invoice_Tabs from '@/views/pages/invoice/invoice-tabs.vue'
import Settingtab from '@/views/pages/settings/settingtab.vue'
import Reports_Head from '@/views/pages/reports/reports-head.vue'

/********* Layouts components **********/
import Header from '@/views/layouts/header.vue'
import Sidebar from '@/views/layouts/sidebar.vue'
import SidebarItem from '@/views/layouts/sidebar-item.vue'
import Notifications from '@/components/notifications.vue'


/***** Breadcrumb  *****/
import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue'


/******  Modal  ******/

import Callmodal from '@/components/modal/callmodal.vue'
import Delete from '@/components/modal/delete.vue'
import Invoicemodal from '@/components/modal/invoicemodal.vue'
import Assetsmodal from '@/components/modal/assetsmodal.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "vue3-circle-progress/dist/circle-progress.css";
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import 'ionicons-npm/css/ionicons.css';
import 'ant-design-vue/dist/reset.css'
import './assets/css/sticky.css'
import "v-calendar/dist/style.css";
import '@/assets/css/feather.css'; 
import '@/assets/css/style.css'; 


import swal from 'sweetalert2';

window.Swal = swal;
const app = createApp(App)


app.component('contexttable', Contexttable)
app.component('inputsize', Inputsize)
app.component('personaldetail', Personaldetail)
app.component('personalinformation', Personalinformation)
app.component('addressform', Addressform)
app.component('basicform', Basicform)
app.component('lightboxone',LightBoxOne)
app.component('lightboxtwo',LightBoxTwo)
app.component('bordered',Bordered)
app.component('borderedjustified',BorderedJustified)
app.component('default',Default)
app.component('justified',Justified)
app.component('questions',Questions)
app.component('vakal',Vakal)
app.component('verticalleft',Verticalleft)
app.component('verticalright',VerticalRight)
app.component('gradientbadges',Gradientbadges)
app.component('badgesone',BadgesOne)
app.component('pillbadges',Pillbadges)
app.component('carouselone',Carouselone)
app.component('carouseltwo',Carouseltwo)
app.component('carouselthree',Carouselthree)
app.component('bootstrapmodal',Bootstrapmodal)
app.component('custommodal',Custommodal)
app.component('modalalert',Modelalert)
app.component('multiplemodal',Multiplemodal)
app.component('pagemodals',Pagemodals)
app.component('positionmodal',Positionmodal)
app.component('staticmodal',Staticmodal)
app.component('backdrop',Backdrop)
app.component('placement',Placement)
app.component('offcanvasone',Offcanvasone)
app.component('smallprogress',Smallprogress)
app.component('extrasmallprogress',Extrasmallprogress)
app.component('mediumprogress',Mediumprogress)
app.component('defaultprogress',Defaultprogress)
app.component('largeprogress',Largeprogress)
app.component('basictab',Basictab)
app.component('bottomtab',Bottomtab)
app.component('linetab',Linetab)
app.component('roundtab',Roundtab)
app.component('solidtab',Solidtab)
app.component('profile',Profile)
app.component('aboutme',Aboutme)
app.component('setting-about',Setting_About)
app.component('patientprofile',Patientprofile)
app.component('patientabout',Patientabout)
app.component('settings',Settings)
app.component('blog-side',Blog_Side)
app.component('details-list',Details_List)
app.component('email-sidebar',Email_Sidebar)
app.component('call-sidebar',Call_Sidebar)
app.component('video-sidebar',Video_Sidebar)
app.component('addcontent',Addcontent)
app.component('addcontent1',AddContent1)
app.component('addcontent2',AddContent2)
app.component('addtable',Addtable)
app.component('add-head',Add_Head)
app.component('recent-patients', RecentPatients)
app.component('upcoming-appointments', UpcomingAppointments)
app.component('appointment-recent', AppointmentRecent)
app.component('body-mask-height', BodyMaskHeight)
app.component('patient-content', PatientContent)
app.component('edittable',Edittable)
app.component('editcontent',Editcontent)
app.component('invoicefilter',Invoicefilter)
app.component('invoice-tabs',Invoice_Tabs)
app.component('settingtab',Settingtab)
app.component('reports-head',Reports_Head)

/********* Layouts components **********/
app.component('layout-header', Header)
app.component('sidebar', Sidebar)
app.component('sidebar-item', SidebarItem)
app.component('notifications',Notifications)

/*****  Breadcrumb  *****/
app.component('breadcrumb',Breadcrumb)


/*******  Modal *******/
app.component('callmodal',Callmodal)
app.component('delete', Delete)
app.component('invoicemodal',Invoicemodal)
app.component('assetsmodal',Assetsmodal)

.use(BootstrapVue3)
.use(BToastPlugin)
app.component('vue-select', VueSelect)
app.component('star-rating', StarRating)
app.component('datepicker', DatePicker)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(VCalendar, {})
app.use(Toaster, {
    position: "top-right",
  });
app.use(VueSweetalert2)
app.use(Antd)
app.component(VueFeather.name, VueFeather)
app.use(VueApexCharts)
app.use(FlagIcon)
app.use(router).mount('#app');


