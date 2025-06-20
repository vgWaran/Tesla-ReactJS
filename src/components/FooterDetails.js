import "./FooterDetails.css";

const FooterDetails = () => {
  return (
    <footer className="footer">
      {/* Legal & Pricing Information */}
      <div className="footer-info">
        <p>1 For Long-Range Rear-Wheel Drive models with 19" wheels.</p>
        <p>
          2 Before the Federal Tax Credit, Model Y Long Range Rear-Wheel Drive starts at $46,630. Price includes Destination and Order Fees but excludes taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. The $7,500 Federal Tax Credit is available to eligible buyers and subject to MSRP caps. Not all vehicles, customers, or finance options will be eligible.</p>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <p>© 2025 Tesla, Inc.</p>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
        <a href="#">Get Updates</a>
        <a href="#">Locations</a>
        <a href="#">Learn</a>
      </div>
    </footer>
  );
};

export default FooterDetails;
