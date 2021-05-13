export const state = () => ({
  audio: '',
  sub: '',
  theme: {},
  weather: [],
  initTheme: {
    darktheme: false,
    background: '#f7f7f7',
    color: 'black',
    boxShadow:  '5px 5px 12px #dedede,-5px -5px 12px #ffffff',
  },
  loadingTheme: true,
  loadingAudio: false,
  loadingweather: true,
})

export const actions = {
  setSub({ commit }, data) {
    this.$cookies.set('sub',data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  getSub({ commit }) {
    const subCookie = this.$cookies.get('sub')
    commit('setState', { sub: subCookie })
  },
  changeSub({ commit }) {
    const subCookie = this.$cookies.get('sub')
    if(subCookie === 'On'){
      this.dispatch('setSub', 'Off');
      commit('setState', { sub: 'Off' })
    } else {
      this.dispatch('setSub', 'On');
      commit('setState', { sub: 'On' })
    }
  },

  setAudio({ commit }, data) {
    this.$cookies.set('audio',data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  getAudio({ commit }) {
    const audioCookie = this.$cookies.get('audio')
    commit('setState', { audio: audioCookie })
  },
  changeAudio({ commit }) {
    const audioCookie = this.$cookies.get('audio')
    if(audioCookie === 'On'){
      this.dispatch('setAudio', 'Off');
      commit('setState', { audio: 'Off' })
    } else {
      this.dispatch('setAudio', 'On');
      commit('setState', { audio: 'On' })
    }
  },

  setTheme({ commit }, data) {
    this.$cookies.set('theme',data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    this.dispatch('getTheme');
  },
  getTheme({ commit }) {
    const themeCookie = this.$cookies.get('theme')
    commit('setState', { theme: themeCookie })
    setTimeout(function () {
      commit('setState', { loadingTheme: false })
    }, 200);
  },
  changeTheme({ commit }) {
    const data = this.$cookies.get('theme')
    if(data.darktheme){
      const classObject= {
        'darktheme': false,
        'background': '#f7f7f7',
        'icon': 'sun',
        'color': 'black',
        'boxShadow':  '5px 5px 12px #dedede,-5px -5px 12px #ffffff',
      }
      this.dispatch('setTheme', classObject);
      commit('setState', { theme: classObject })
    } else {
      const classObject= {
        'darktheme': true,
        'background': '#36454f',
        'icon': 'moon',
        'color': 'white',
        'boxShadow': '5px 5px 10px #29343c,-5px -5px 10px #435662',
      }
      this.dispatch('setTheme', classObject);
      commit('setState', { theme: classObject })
    }
  },

  setLoadingAudio({ commit }, data) {
    commit('setState', { loadingAudio: false })
  },

  setWeather({ commit }, data) {
    console.log('setWeather')
    this.$cookies.set('weather',data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    this.dispatch('getWeather');
  },
  getWeather({ commit }) {
    console.log('getWeather')
    const weatherCookie = this.$cookies.get('weather')
    commit('setState', { weather: weatherCookie })
    setTimeout(function () {
      commit('setState', { loadingweather: false })
    }, 200);
  },
  
}

export const mutations = {
  setState(state, params) {
    for (const [key, value] of Object.entries(params)) {
      state[key] = value
    }
  },
}