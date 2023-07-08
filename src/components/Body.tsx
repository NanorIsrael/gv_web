
type BodyProps = {
    aside?: boolean
    children: JSX.Element
}

export default function Body({children, aside}: BodyProps) {
    return (
        <main className="px-2 ">
           { aside && <aside className={''}></aside>}
            <>
                {children}
            </>
        </main>
    )
}