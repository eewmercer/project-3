import "../globals.css";
import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <main className="main-navigation-container">
        <h2>Recipe Generator</h2>
        <nav className="navigation-container">
            <div className="link-styles">
                <Link href={'/'} style={{textDecoration: 'none', color: 'white'}}>Dashboard</Link>
            </div>
            <div className="link-styles">
                <Link href={'/generate'} style={{textDecoration: 'none', color: 'white'}}>Generate Recipes</Link>
            </div>
            <div className="link-styles">
                <Link href={'/search'} style={{textDecoration: 'none', color: 'white'}}>Search Recipes</Link>
            </div>
            {/* <div className="link-styles">
                <Link href={'/individual'} style={{textDecoration: 'none', color: 'white'}}>Individual Recipes</Link>
            </div> */}
        </nav>
    </main>

  );
}
