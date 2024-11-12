import React from "react"

const PromoTextField = ({ tag, inputHandler, name }) => {
  const containerStyle = {
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '0.25rem',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '2px',
    paddingBottom: '2px',
    width: '100%',
  };

  const tagStyle = {
    fontSize: '13px',
  };

  const inputStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    outline: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={tagStyle}>{tag}</div>
      <input
        style={inputStyle}
        type="text"
        onChange={inputHandler}
        name={name}
      />
    </div>
  )
}

export default PromoTextField;
