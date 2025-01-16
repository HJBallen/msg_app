export class Validation {
  static username (username) {
    if (typeof username !== 'string') throw new Error('The username must be a string', { cause: { status: 409 } })
    if (username.length < 5 || username.length > 20) throw new Error('The username must be between 5 and 20 characters long', { cause: { status: 409 } })
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('The password must be a string')
    if (password.length < 6) throw new Error('The password must be at least 6 characters long')
  }

  static userImgUrl (userImg) {
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/
    if (!pattern.test(userImg)) throw new Error('The user img must be a valid url')
  }
}
