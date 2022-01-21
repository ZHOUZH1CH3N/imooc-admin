// 快捷访问
const getters = {
  token: (state) => state.user.token,
  // return true表示用户信息已经存在
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo
}
export default getters
