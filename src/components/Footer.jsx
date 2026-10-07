export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} KLS Gogte Institute of Technology, Belagavi. All rights
          reserved.
        </p>
        <p className="footer-links">
          <a href="https://git.edu" target="_blank" rel="noopener noreferrer">
            git.edu
          </a>
          <span aria-hidden="true">·</span>
          <span>Udyambag, Belagavi, Karnataka 590008</span>
        </p>
      </div>
    </footer>
  );
}
