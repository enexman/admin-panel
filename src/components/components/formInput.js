/* eslint-disable */
import React from 'react'

import TemplateInput from './templateInput'

import {
  ValidatorName,
  ValidatorLastName,
  ValidatorEmail,
  ValidatorPassword,
  ValidatorLicenseNumber,
  ValidatorMax200,
  ValidatorMax250,
  ValidatorMin10,
  ValidatorURL,
  ValidatorAddImage
} from '../overall/validators'

export const NameInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Name"
      errorText={['Errors.Length', {min: 2, max: 50}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorName}
      fullWidth
      required={required}/>
  )
}

export const CommentInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Comment"
      errorText={['Errors.Length', {min: 10, max: 1000}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMin10}
      fullWidth
      required={required}/>
  )
}

export const LastNameInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="LastName"
      errorText={['Errors.Length', {min: 0, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorLastName}
      fullWidth
      required={required}/>
  )
}

export const EmailInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Email"
      errorText={['Errors.Email']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorEmail}
      fullWidth
      required={required}/>
  )
}

export const PasswordInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Password"
      errorText={['Errors.Password', {min: 6, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorPassword}
      fullWidth
      required={required}/>
  )
}

// ----------------
export const TitleInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Title"
      errorText={['Errors.Length', {min: 2, max: 200}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMax200}
      fullWidth
      required={required}/>
  )
}

export const MetaKeywordInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="MetaKeyword"
      errorText={['Errors.Length', {min: 2, max: 250}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMax250}
      multiLine={true}
      rows={3}
      fullWidth
      required={required}/>
  )
}
export const MetaDescriptionInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="MetaDescription"
      errorText={['Errors.Length', {min: 2, max: 250}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMax250}
      multiLine={true}
      rows={3}
      fullWidth
      required={required}/>
  )
}

export const CustomerInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Customer"
      errorText={['Errors.Length', {min: 2, max: 200}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMax200}
      fullWidth
      required={required}/>
  )
}

export const TechnologyTextInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="TechnologyText"
      errorText={['Errors.Length', {min: 2, max: 200}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMax200}
      multiLine={true}
      rows={3}
      fullWidth
      required={required}/>
  )
}

export const URLInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="URL"
      errorText={['Errors.Length', {min: 2, max: 250}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorURL}
      fullWidth
      required={required}/>
  )
}

export const BodyInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Body"
      errorText={['Errors.Length', {min: 10, max: 1000}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorMin10}
      fullWidth
      multiLine={true}
      rows={6}
      required={required}/>
  )
}

export const ImageIdInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="ImageId"
      errorText={['Errors.Numeric']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorLicenseNumber}
      fullWidth
      required={required}/>
  )
}

export const TitleImage = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="TitleImage"
      errorText={['Errors.Length', {min: 2, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorAddImage}
      fullWidth
      required={required}/>
  )
}

export const AltText = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="AltText"
      errorText={['Errors.Length', {min: 2, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorAddImage}
      fullWidth
      required={required}/>
  )
}

/* eslint-enable */
