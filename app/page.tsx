import Link from 'next/link'; //import link component from nextjs that allows us to link a page to our homepage.
import Image from 'next/image'; //import used to serve images in project, formats image accordingly
{/* This is the primary function that is imported when the file is referenced*/ }
{/* Due to it's path (app/page.tsx) - this is the homepage. */}
export default function Home() {
    {/* Shows what will be rendered.
        Div creates a container for styling.*/}
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Next.js Tutorial!</h2>
      <p>Embark on your journey to master Next.js. Start small, dream big!</p>
      <Image
      src="/1713480039939.jpg"
      alt="Inspiring sight"
      width={300}
      height={300}
      style={{borderRadius: '10px'}}
      />

      <div style={{ marginTop: '2rem' }}>
        {/*this is where we use the link import - to link pages. Includes button formatting.*/}
        <Link href="/files">
          <button style={{ margin: '0.5rem' }}>Files in Next.js</button>
        </Link> 
        <Link href="/app-router">
          <button style={{ margin: '0.5rem' }}>App Router</button>
        </Link>
        <Link href="/server-components">
          <button style={{ margin: '0.5rem' }}>Server Components</button>
        </Link>
      </div>
    </div>
  );
}
