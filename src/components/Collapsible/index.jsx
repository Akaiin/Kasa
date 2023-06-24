import { useState } from 'react'

function Collapsible({ title, children }) {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (
        <div className="collapsible">
            <div className="collapsible__title">
                <h2>{title}</h2>{' '}
                <button
                    onClick={handleClick}
                    className={`collapsible__btn collapsible__btn--${
                        isOpen ? 'open' : 'closed'
                    }`}
                >
                    w
                </button>
            </div>
            <p
                className={`collapsible__content collapsible__content--${
                    isOpen ? 'open' : 'closed'
                }`}
            >
                {children}
            </p>
        </div>
    )
}

export default Collapsible
