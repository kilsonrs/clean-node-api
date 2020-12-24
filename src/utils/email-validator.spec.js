class EmailValidator {
  isValid (email) {
    return true
  }
}

describe('EmailValidator', () => {
  test('Should returns true if validator is true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })
})
