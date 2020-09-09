import React from 'react';

import './style.scss'

const PrincipleList = (props) => {

    const { principles } = props;

    console.log(principles);

    if (!principles) return <div>...Loading</div>

    return (
        <div className='PrincipleList'>
            {
                principles.map(principle => {
                    return (
                        <div className='principle-container'>
                            <div className='principle-title'>
                                {principle.title}
                            </div>
                            <div className='principle-desc'>
                                {principle.desc}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PrincipleList; 