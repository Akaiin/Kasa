import { useState } from 'react'

function Collapsible({ title, children }) {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (
        <div className="collapsible">
            <div className="collapsible__container">
                <h2 className="collapsible__title">{title}</h2>{' '}
                <button
                    onClick={handleClick}
                    className={`collapsible__btn collapsible__btn--${
                        isOpen ? 'open' : 'closed'
                    }`}
                >
                    <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.69313 0.502922C8.13941 0.0566427 8.86416 0.0566427 9.31044 0.502922L16.1653 7.35777C16.6116 7.80405 16.6116 8.52881 16.1653 8.97509C15.719 9.42137 14.9943 9.42137 14.548 8.97509L8.5 2.92711L2.45203 8.97152C2.00575 9.4178 1.28099 9.4178 0.83471 8.97152C0.388431 8.52524 0.388431 7.80048 0.83471 7.3542L7.68956 0.499352L7.69313 0.502922Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`collapsible__content collapsible__content--${
                    isOpen ? 'open' : 'closed'
                }`}
            >
                {children}
            </div>
        </div>
    )
}

export default Collapsible
