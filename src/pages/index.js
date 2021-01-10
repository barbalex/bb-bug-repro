import React, { useCallback } from 'react'
import { navigate } from 'gatsby'

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: '16px',
  verticalAlign: '5%',
}
const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
}

const IndexPage = () => {
  const onClickSecond = useCallback(() => {
    navigate('/second/')
  }, [])

  return (
    <main style={pageStyles}>
      <title>Home Page</title>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <div style={linkStyle} onClick={onClickSecond}>
            second
          </div>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage
