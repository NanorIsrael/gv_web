type BodyProps = {
  aside?: boolean;
  children: JSX.Element;
};

export default function Body({ children, aside }: BodyProps) {
  return (
    <main className="pr-2 ">
      {aside && <aside className={'aside p-4 '}>
        <h3 className="text-center text-2xl text-bold">Personal details</h3>
        <hr/>
        <section className="p-2">
            <h4 >Name</h4>
            <p>Israel Nanor</p>
        </section>
        <section  className="p-2">
            <h4>Email address</h4>
            <p>israelnanor88@gmail.com</p>
        </section>
        <section  className="p-2">
            <h4>Phone</h4>
            <p>+233557084927</p>
        </section>
        <section  className="p-2">
        <h4>Address</h4>
            <address>
                <p>+7321 spintex Accra-Ghana 00233 Accra</p>
            </address>
        </section>
        <section  className="p-2">
            <h4>LinkedIn</h4>
            <p>www.linkedin.com/in/israelnanor1z</p>
        </section>
        <section  className="p-2">
            <h4>Profile</h4>
            <p>Highly organised and dedicated full stack web applications 
                software engineer with record of delivering excellent customer experience
                for high profile organisations.
            </p>
        </section>
        <section  className="p-2">
            <h4>Skills</h4>
            <p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>AWS</li>
                    <li>GIT</li>
                    <li>React</li>
                    <li>Postgres SQL</li>
                    <li>No SQL</li>
                    <li>Shell scripting</li>
                    <li>Python</li>
                    <li>C programming</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Nodejs</li>
                    <li>Javascript/Typescript</li>
                </ul>
            </p>
        </section>
        <section  className="p-2">
            <h4>Interest</h4>
            <p>
                <ul>
                    <li>Reading</li>
                    <li>Travelling</li>
                    <li>Cycling</li>
                </ul>
            </p>
        </section>
        
      </aside>}
      <div>{children}</div>
    </main>
  );
}
