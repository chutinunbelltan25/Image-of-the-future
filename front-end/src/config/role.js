import upload from "../pages/upload";

// component's config object.
const components = {
    login: {
      component: 'Login',
      url: '/login',
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
        url: '/uploadFile'
    },
    admin: {
        component: 'Admin',
        url: '/admin'
    },
    detailPicture: {
        component: 'DetailPicture',
        url: '/detailPicture'
    }
  };
  
  export default {
    //role name as a key.
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
        components.signup,
        components.register
      ]
    }
  }