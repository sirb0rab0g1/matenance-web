import Vue from 'vue'

// BASE
import BaseFooter from '~/components/BaseFooter'

// FIND A CLEANER
import ChoicesModal from '~/components/findcleaner/ChoicesModal'

// Footers
import HouseCleaningFooter from '~/components/footers/HouseCleaningFooter'
import CarpetCleaningFooter from '~/components/footers/CarpetCleaningFooter'
import FinalBondCleaningFooter from '~/components/footers/FinalBondCleaningFooter'
import SpringCleaningFooter from '~/components/footers/SpringCleaningFooter'
import CommercialCleaningFooter from '~/components/footers/CommercialCleaningFooter'
import JobsFooter from '~/components/footers/JobsFooter'
// PROPS
import GlobalToolbar from '~/components/props/GlobalToolbar'

// GLOBAL COMPONENTS
import AboutUs from '~/components/global/AboutUs'
import FaqTemplate from '~/components/global/FaqTemplate'

// CUSTOM GLOBAL PROP COMPONENTS (that are not in vuetify)
import CGlobal from '~/components/Customs/CGlobal'
// import CTextField from '~/components/Customs/CTextField'
import CCard from '~/components/Customs/CCard'
import CDatePicker from '~/components/Customs/CDatePicker'
import CTimePicker from '~/components/Customs/CTimePicker'

// modals
import HoursSchedule from '~/components/Customs/dialogs/HouseCleaning/HoursSchedule'
import CommercialCleaningSchedule from '~/components/Customs/dialogs/CommercialCleaning/CommercialCleaningSchedule'
import FinalBondCleaningSchedule from '~/components/Customs/dialogs/FinalBondCleaning/FinalBondCleaningSchedule'
import CarpetCleaningSchedule from '~/components/Customs/dialogs/CarpetCleaning/CarpetCleaningSchedule'
import SpringCleaningSchedule from '~/components/Customs/dialogs/SpringCleaning/SpringCleaningSchedule'
import LoginDialog from '~/components/Customs/dialogs/Login/LoginDialog'
import RegistrationDialog from '~/components/Customs/dialogs/Registration/RegistrationDialog'
import SupplierFilter from '~/components/Customs/dialogs/Jobs/SupplierFilter'
import AddVisit from '~/components/Customs/dialogs/Jobs/AddVisit'
import JobFutureCancel from '~/components/Customs/dialogs/Jobs/JobFutureCancel'

// navigation drawer
import NavigationDrawer from '~/components/NavigationDrawer'

/*
  REMINDER: implementation below will be remove after db is already implemented
*/

import ImaginaryUser from '~/components/Customs/dialogs/ImaginaryUser/ImaginaryUser'

const components = {
  AboutUs,
  AddVisit,
  BaseFooter,
  CarpetCleaningSchedule,
  CarpetCleaningFooter,
  CCard,
  CGlobal,
  ChoicesModal,
  //  CTextField,
  CDatePicker,
  CTimePicker,
  CommercialCleaningSchedule,
  CommercialCleaningFooter,
  FaqTemplate,
  FinalBondCleaningFooter,
  FinalBondCleaningSchedule,
  GlobalToolbar,
  LoginDialog,
  RegistrationDialog,
  JobsFooter,
  JobFutureCancel,
  HoursSchedule,
  HouseCleaningFooter,
  NavigationDrawer,
  SpringCleaningSchedule,
  SpringCleaningFooter,
  SupplierFilter,
  ImaginaryUser
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
