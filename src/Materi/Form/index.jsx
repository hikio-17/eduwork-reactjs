import React, { Component } from 'react'
import styles from './index.module.css'

export class Form extends Component {
  state = {
    field: {
      name: '',
      email: '',
      password: ''
    },
    errors: {
      name: '',
      email: '',
      password: ''
    }
  }

  handleFormOnValidate = (name, value) => {
    if (!value) {
      return 'Mohon isi field'
    }

    if (name === 'name' && value.length < 3) {
      return 'Nama minimal 3 karakter'
    }

    if (name === 'email' && !value.includes('@')) {
      return 'Format email tidak sesuai'
    }

    if (name === 'password' && value.length < 8) {
      return 'Password terlalu pendek'
    }

    return false
  }

  handleFormOnChange = (event) => {
    const { field, errors } = this.state
    const { value, name } = event.target
    const error = this.handleFormOnValidate(name, value)
    this.setState({
      field: {
        ...field,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: error
      }
    })
  }

  handleFormOnSubmitValidation = () => {
    const { field } = this.state
    const names = Object.keys(field) // ['name', 'email', 'password']
    const errors = {}
    names.forEach((name) => {
      const value = field[name]
      const error = this.handleFormOnValidate(name, value)
      errors[name] = error
    })

    return errors
  }

  handleFormOnSubmit = (event) => {
    event.preventDefault()
    const validation = this.handleFormOnSubmitValidation()
    const hasError = Object.values(validation).some((item) => item !== false)
    if (hasError) {
      this.setState({ errors: validation })
      return
    }

    const { field } = this.state
    console.log(validation, field) // Proses selanjutnya
  }

  render() {
    // console.log('Render')
    const { field, errors } = this.state
    return (
      <div>
        <form onSubmit={this.handleFormOnSubmit}>
          <div>
            <h1>Name</h1>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.input}
              value={field.name}
              onChange={this.handleFormOnChange}
            />
            <p>{errors.name}</p>
          </div>
          <div>
            <h1>Email</h1>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
              value={field.email}
              onChange={this.handleFormOnChange}
            />
            <p>{errors.email}</p>
          </div>
          <div>
            <h1>Password</h1>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              value={field.password}
              onChange={this.handleFormOnChange}
            />
            <p>{errors.password}</p>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Form;