'use client';
import React, { useState} from 'react'

export default function Reviews() {
    const [resourceType, setResourceType] = useState('england')


    return (
        <>
          <div>
            <button onClick={() => setResourceType('england')}>England</button>
            <button onClick={() => setResourceType('wales')}>Wales</button>
            <button onClick={() => setResourceType('scotland')}>Scotland</button>
          </div>
          <h1>{resourceType}</h1>
        </>
    )

}