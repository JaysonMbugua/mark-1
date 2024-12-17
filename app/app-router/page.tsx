//name of the route is dictated by the folder - not the indiviudal file name.
//hence why multiple page.js with no conflict.
export default function AppRouter() {
    return (
      <div>
        <h2>Understanding the App Router</h2>
        <p>
          The App Router in Next.js is a new file-based routing system. 
          It allows you to define routes within the app/ directory, 
          supporting layouts, nested routes, and data fetching with React Server Components.
        </p>
      </div>
    );
  }
  