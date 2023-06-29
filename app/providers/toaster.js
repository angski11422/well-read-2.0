'use client'

import { Toaster } from 'react-hot-toast'

const ToasterProvider = () => {
    return (
        <div>
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default ToasterProvider;