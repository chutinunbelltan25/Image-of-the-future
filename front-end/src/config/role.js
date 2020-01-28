
// component's config object.
const components = {
  navbarMenu: {
    component: 'NavbarMenu',
    url: '/navbarMenu',
  },
  register: {
    component: 'Register',
    url: '/register',
  },

  home: {
    component: 'Home',
    url: '/home',
  },
  user: {
    component: 'User',
    url: '/user',
  },
  uploadFile: {
    component: 'UploadFile',
    url: '/upload'
  },
  detailPicture: {
    component: 'DetailPicture',
    url: '/detailPicture'
  }
};

export default {
  admin: {
    routes: [...Object.values(components)],
  },
  user: {
    routes: [
      components.home,
      components.uploadFile,
      components.user,
      components.detailPicture
    ] 
  },
  guest: {
    routes: [
      components.home,
      components.navbarMenu,
      components.register
    ]
  }
}