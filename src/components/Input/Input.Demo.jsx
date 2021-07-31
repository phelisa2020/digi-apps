import React from 'react'
import { Input } from './Input'

export const Demo = () => {
    return (
        <div>
            <div>
            <Input accepts="text" label="Text" />
            </div>
            <div>
            <Input accepts="password" label="Password" />
            </div>
            <div>
            <Input accepts="email" label="Email" />
            </div>
        </div>
    )
}

export default Demo