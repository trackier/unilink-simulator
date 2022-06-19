import "./index.scss";

const Footer = () => (
  <div className="footer">
    <footer className="bg-dark">
      <div className="container footer-content">
        <div className="content d-flex justify-content-between">
          <p>©{new Date().getFullYear()} CLOUDSTUFF, INC. Rights Reserved.</p>
          <div>
            <a href="https://trackier.com/billing-policy/" target="_blank" rel="noreferrer">BILLING POLICY | </a>
            <a href="https://trackier.com/terms-of-service/" target="_blank" rel="noreferrer">TERMS OF SERVICE | </a>
            <a href="https://trackier.com/privacy-policy/" target="_blank" rel="noreferrer">PRIVACY POLICY.</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
