import { getLocalUser } from '../../../../services/auth'

const user = getLocalUser()

export default {
  currentUser: user,
  isLoggedIn: !!user,
  socketID: null,
}
