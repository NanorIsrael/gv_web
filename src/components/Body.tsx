
type BodyProps = {
    aside?: boolean
    children: JSX.Element
}

export default function Body({children, aside}: BodyProps) {
    return (
        <main className="pr-2 ">
           { aside && <aside className={''}>aside</aside>}
            <div>
                {children}
            </div>
        </main>
    )
}