import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie';
import cookie from 'cookie';

export default ({store, req, res}) => {
  createPersistedState({
    key: 'mcn-landing-pages',
    paths: ["salePage.savedData", "salePage.salePages"],
    storage: {
      getItem: (key) => process.server
          ? cookie.parse(req.headers.cookie ?? '')[key]
          : Cookies.get(key),
      setItem: (key, value) => {
        if (key !== '@@') {
          process.client
            ? Cookies.set(key, value, {expires: 365, secure: false})
            : res.setHeader('Set-Cookie',
            cookie.serialize(key, value, {maxAge: 365, secure: false}))
        }
      },
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}
