import React from 'react';

const DashboardPage = () => {
  return (
    <section aria-labelledby="dashboard-heading">
      <h1 id="dashboard-heading">Dashboard Information</h1>

      <article
        aria-labelledby="innovation-heading"
        className="dashboard-summary"
      >
        <h2 id="innovation-heading">
          CRISPR Gene Editing Therapies Approved for Sickle Cell Disease
        </h2>

        <p>
          Over the past several months, one of the most exciting breakthroughs in
          healthcare has come from the continued progress of CRISPR gene
          editing for sickle cell disease. This is a major step forward because
          sickle cell has always been a condition people mainly manage rather
          than cure. Now, with the approval and real-world use of therapies like
          Casgevy, patients finally have access to a treatment that addresses
          the actual cause of the disease at the genetic level. Clinics across
          North America, the European Union and the Middle East have already
          begun delivering these treatments, showing just how quickly this
          innovation is spreading.
        </p>
        <p>
          What makes this moment even more impressive is the recent development
          of a personalized CRISPR treatment created for a single patient in
          just 6 months. It proves that gene editing is evolving from a research
          concept into something that can be tailored to a person’s unique
          genetic needs. Early results from clinical trials show significant
          improvements in quality of life, including fewer pain crises and
          better emotional, social, and physical functioning. Researchers are
          also finding new ways to make treatments more affordable, such as
          targeting enhancer RNAs rather than permanently editing DNA. Even with
          these challenges and the financial pressure on biotech research,
          CRISPR remains one of the clearest examples of real healthcare
          innovation happening right now. It represents a future where diseases
          caused by genetic mutations can be treated directly at the source,
          giving patients hope for longer, healthier lives.
        </p>
        <p>
          Link to Article:{' '}
          <a
            href="https://innovativegenomics.org/news/crispr-clinical-trials-2025/"
            target="_blank"
            rel="noreferrer"
          >
            https://innovativegenomics.org/news/crispr-clinical-trials-2025/
          </a>
        </p>
      </article>

      {/* Technical Overview in a card box */}
      <article
        aria-labelledby="technical-overview-heading"
        className="card-section card-section--large"
      >
        <h2 id="technical-overview-heading">Technical Overview</h2>

        <p>
          This project uses a simple but effective structure to keep everything
          organized and easy to work with. The frontend is built with React,
          which lets the site function as a single-page application so users can
          move through the Dashboard, Summary, and Reports pages without the
          entire page refreshing. React Router handles the navigation, and
          protected routes make sure only logged-in users can access the main
          parts of the app. The backend is powered by Node.js and Express,
          running on port 3000, and it includes routes for login and for
          retrieving the chart data. All requests to protected API routes go
          through JWT authentication to keep the app secure.
        </p>
        <p>
          MongoDB is included as the required database and is connected through
          Mongoose. Even though the chart data is simple, the database
          structure shows how the backend can store and manage information. The
          entire app is hosted on a single DigitalOcean Droplet, where NGINX
          serves the React build on port 80 and forwards any /api requests to
          the backend. PM2 keeps the server running in the background, even
          after logging out. Overall, the setup is straightforward, but it
          reflects the same design ideas I value in other projects: clarity,
          structure, and an experience that makes sense for the user.
        </p>

        {/* Tech snapshot grid – exactly your bullet points */}
        <div className="tech-grid" aria-label="Technical stack overview">
          <section className="tech-card">
            <h3>Frontend Technology</h3>
            <ul>
              <li>React SPA</li>
              <li>React Router</li>
              <li>Protected routes</li>
              <li>JWT stored client-side</li>
              <li>Runs on port 80 behind NGINX</li>
            </ul>
          </section>

          <section className="tech-card">
            <h3>Backend Technology</h3>
            <ul>
              <li>Node.js + Express</li>
              <li>REST API endpoints (/api/auth/login, /api/chart/.)</li>
              <li>JWT authentication middleware</li>
              <li>Backend listens on port 3000</li>
            </ul>
          </section>

          <section className="tech-card">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>Mongoose schema </li>
              <li>Used for required database integration</li>
            </ul>
          </section>

          <section className="tech-card">
            <h3>Communication</h3>
            <ul>
              <li>HTTP GET/POST</li>
              <li>JSON responses</li>
              <li>Dynamic chart data fetched asynchronously</li>
            </ul>
          </section>

          <section className="tech-card">
            <h3>Hosting / Infrastructure</h3>
            <ul>
              <li>One DigitalOcean Droplet</li>
              <li>NGINX serving the React build</li>
              <li>NGINX reverse-proxy forwarding /api to Node backend</li>
              <li>PM2 or systemd keeping the backend alive after logout</li>
            </ul>
          </section>

          <section className="tech-card">
            <h3>Security</h3>
            <ul>
              <li>No hardcoded secrets committed (JWT secret in .env)</li>
              <li>Protected API routes requiring JWT</li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
};

export default DashboardPage;
