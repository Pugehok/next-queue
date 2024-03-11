

interface Props{
    handler: () => void
    color: 'accept' | 'denied'
    margin?: number
    children: React.ReactNode
}



export const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.handler} className={`bg-main-${props.color} text-main-white mt-4 rounded-xl w-48 h-12`}>
            <span className="font-semibold text-white">{props.children}</span>
        </button>
    )
}