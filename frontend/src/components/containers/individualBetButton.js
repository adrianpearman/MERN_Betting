import React from 'react' 

const IndividualBetButton = (props) => {
    return(
        <div className='col'>
            <a
                className={`btn btn-primary btn-${props.classStyle}`}
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.name}
            </a>
        </div>
    )
}

export default IndividualBetButton