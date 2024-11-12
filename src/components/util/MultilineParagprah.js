import React from 'react';

const MultilineParagraph = ({ text, className = '' }) => {
    function isNotLastParagraph(i, paragraphs) {
        return i !== paragraphs.length - 1;
    }
    const paragraphs = text.split('\n');
    return (
        <>
            {paragraphs.map((p, i) => (
                <React.Fragment key={i}>
                    <p className={`${className}`}>{p}</p>
                    {isNotLastParagraph(i, paragraphs) && <br></br>}
                </React.Fragment>
            ))}
        </>
    );
};

export default MultilineParagraph;
