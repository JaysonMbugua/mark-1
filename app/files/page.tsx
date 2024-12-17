//name of the route is dictated by the folder - not the indiviudal file name.
//hence why multiple page.js with no conflict.
export default function Files() {
    return (
      <div>
        <h2>Files in a Next.js Project</h2>
        <ul>
          <li><strong>app/</strong>: The directory for pages and layouts. </li>
          <li><strong>public/</strong>: Static files like images and fonts.</li>
          <li><strong>pages/</strong>: Legacy file-based routing.</li>
          <li><strong>next.config.js</strong>: Configuration for Next.js.</li>
          <li><strong>package.json</strong>: Project dependencies and scripts.</li>
        </ul>
      </div>
    );
  }
  