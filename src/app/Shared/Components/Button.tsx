'use client'
interface Props{
    handler: () => void
    color: 'accept' | 'denied'
    children: React.ReactNode
}



export const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.handler} className={`bg-main-${props.color} text-main-white`}>{props.children}</button>
    )
}