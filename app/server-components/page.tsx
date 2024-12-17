//name of the route is dictated by the folder - not the indiviudal file name.
//hence why multiple page.js with no conflict.
export default function ServerComponents() {
    return (
      <div>
        <h2>Server Components in Next.js</h2>
        <p>
          Server Components enable better performance and scalability by rendering parts of your app on the server.
          They reduce JavaScript sent to the client, improving load times.
        </p>
      </div>
    );
  }
  