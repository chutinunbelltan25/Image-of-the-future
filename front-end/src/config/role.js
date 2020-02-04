
const components = {
  navbarMenu: {
    component: 'NavbarMenu',
    url: '/navbarMenu',
  },
  search: {
    component: 'Search',
    url: '/search',
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
  },
  aboutMe: {
    component: 'AboutMe',
    url: '/aboutMe'
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
      components.detailPicture,
      components.aboutMe,
      components.search,
    ] 
  },
  guest: {
    routes: [
      components.home,
      components.navbarMenu,
      components.register,
      components.search,
      components.aboutMe
    ]
  }
}