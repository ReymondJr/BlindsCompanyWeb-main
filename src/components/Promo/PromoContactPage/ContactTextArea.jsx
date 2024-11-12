import React from "react"

const PromoTextArea = ({ tag, name, inputHandler }) => {
  const containerStyle = {
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '0.25rem',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100%',
  };

  const tagStyle = {
    fontSize: '13px',
  };

  const textareaStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    outline: 'none',
    height: '50px',
    maxHeight: '50px',
  };

  return (
    <div style={containerStyle}>
      <div style={tagStyle}>{tag}</div>
      <textarea
        style={textareaStyle}
        onChange={inputHandler}
        type="text"
        name={name}
      />
    </div>
  )
}

export default PromoTextArea;
