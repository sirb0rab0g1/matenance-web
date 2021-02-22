export default {
  data: () => ({
    items: [
      { title: 'Book a Job',condition: 'page', path: '/' },
      { title: 'About Us',condition: 'page', path: '/about'  },
      { title: 'FAQ`s',condition: 'page', path: '/faq'  },
        { title: 'T&C`s' },
        { title: 'Articles' },
      { title: 'Locations' },
      { title: 'Contact', condition: 'page', path: '/guest/contact'  },
      { title: 'Become a Supplier', condition: 'page', path: '/guest/becomeasupplier'  }
    ],
    customerItems: [
      { title: 'Book a Job', condition: 'page', path: '/' },
      { title: 'My Account', condition: 'dialog', name: 'cus_account'},
      { title: 'My Jobs', condition: 'page', path: '/customer/myjobs' },
      { title: 'About Us',condition: 'page', path: '/about'  },
      { title: 'FAQ`s',condition: 'page', path: '/faq'  },
        { title: 'T&C`s' },
        { title: 'Articles' },
      { title: 'Locations' },
      { title: 'Contact', condition: 'page', path: '/' },
      { title: 'Logout', condition: 'page', path: '/logout' }
    ],
    supplierItems: [
      { title: 'Book a Job', condition: 'page', path: '/' },
      { title: 'My Account', condition: 'page', path: '/supplier/myaccount'},
      { title: 'My Jobs', condition: 'page', path: '/supplier/myjobs' },
      { title: 'About Us',condition: 'page', path: '/about'  },
      { title: 'FAQ`s',condition: 'page', path: '/faq'  },
        { title: 'T&C`s' },
        { title: 'Articles' },
      { title: 'Locations' },
      { title: 'Contact Supplier', condition: 'page', path: '/supplier/contact' },
      { title: 'Become a Supplier', condition: 'page', path: '/supplier/becomeasupplier'  },
      { title: 'Logout', condition: 'page', path: '/logout' }
    ]
  })
}
