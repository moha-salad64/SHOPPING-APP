import React from 'react';


const About = () => {
  return (
    <div className="about-page-container">
      <header className='about-page-header'>
        <h1>About The Shopping List Project</h1>
      </header>
      <main className='about-page-main'>
        <section className='about-page-section'>
          <h2>Project Overview</h2>
          <p>The Shopping List Project is a simple,
            intuitive application designed to help you manage your grocery shopping efficiently.
            With this tool, you can create, edit, and delete shopping lists,
            ensuring you never forget any essential items.</p>
        </section>
        <section className='about-page-section'>
          <h2>Features</h2>
          <p>Features of the project:</p>
          <ul>
            <li>Create multiple shopping lists</li>
            <li>Edit items in your lists</li>
            <li>Delete items once purchased</li>
          </ul>
        </section>
        <section className='about-page-section'>
          <h2>Technologies Used</h2>
          <p>This project is built using the following technologies:</p>
          <ul>
            <li>HTML5 for structure</li>
            <li>CSS3 for styling</li>
            <li>React Js for building user interfaces</li>
            <li>Global Storage for data persistence</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
