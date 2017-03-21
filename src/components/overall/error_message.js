import React, {Component} from 'react'
class ErrorMessage extends Component {

  render () {
    return (
      <div style={{
        display: this.props.visible ? 'flex' : 'none',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        zIndex: '99999',
        background: 'rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          width: '300px',
          minHeight: '100px',
          marginLeft: 'auto',
          marginTop: '150px',
          marginBottom: 'auto',
          border: '0px solid black',
          backgroundColor: 'rgba(255, 0, 85, 1)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <p style={{
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            error
          </p>
          <p style={{
            textAlign: 'center',
            maxWidth: '300px',
            fontSize: '12px'
          }}>
            {this.props.error}
          </p>
        </div>
      </div>
    )
  }
}
export default ErrorMessage
