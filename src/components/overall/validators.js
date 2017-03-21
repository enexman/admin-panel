import validator from 'validator'

export function ValidatorError (name, status, err) {
  !status && err.indexOf(name) === -1 ? err.push(name) : ''
  status && err.indexOf(name) !== -1 ? err.splice(err.indexOf(name), 1) : ''
  // console.log('this.state.Errors', err)
  return err
}

export function ValidatorName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 2, max: 50 })
}

export function ValidatorFirstName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}

export function ValidatorLastName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}

export function ValidatorEmail (value) {
  return validator.isEmpty(value) || !validator.isEmail(value)
}

export function ValidatorPassword (value) {
  return !validator.isLength(value, { min: 6, max: 64 }) || validator.isEmpty(value)
}

export function ValidatorLicenseNumber (value) {
  return !validator.isNumeric(value)
}

export function ValidatorPhone (value) {
  return !validator.isLength(value, { min: 5, max: 12 })
}

export function ValidatorMessage (value) {
  return !validator.isLength(value, { min: 6, max: 256 })
}
// ----
export function ValidatorMax200 (value) {
  return !validator.isLength(value, { min: 2, max: 200 })
}

export function ValidatorMax250 (value) {
  return !validator.isLength(value, { min: 2, max: 250 })
}

export function ValidatorMin10 (value) {
  return !validator.isLength(value, { min: 10, max: 1000 })
}

export function ValidatorURL (value) {
  return !validator.isLength(value, { min: 2, max: 250 })
}

export function ValidatorAddImage (value) {
  return !validator.isLength(value, { min: 2, max: 64 })
}
