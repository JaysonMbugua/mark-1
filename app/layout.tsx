import './globals.css';

{/* root layout - wraps around all pages and component of app.*/
 /*Children represents all components passed to the layout. Each component will be rendered where {children} is placed.*/}
 import './globals.css';

 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode;
 }) {
   return (
     <html lang="en">
       <body>
         <div className="container">
           <header className="header">
             <h1>Welcome to the Next.js App</h1>
             <p>Your journey into modern web development starts here.</p>
           </header>
           <main className="main-content">{children}</main>
           <footer className="footer">
             <p>
             &quot;Learning is the bridge between curiosity and mastery, where every step forward reveals the infinite potential within you.  &quot;</p>
           </footer>
         </div>
       </body>
     </html>
   );
 }
 