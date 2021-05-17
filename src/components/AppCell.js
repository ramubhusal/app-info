import React from 'react';

const AppCell = (props) => {
    return (
        <div dangerouslySetInnerHTML={{__html: props.urlData}}>
        </div>
    )
}

export default AppCell;