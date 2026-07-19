const Footer = () => {
  return (
    <footer className="text-gray-500 text-sm flex flex-col items-center justify-center p-4 bg-white">
      <div>
        <p>©2026 Zoom Communications, Inc. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex space-x-2">
          <li>
            <a
              href="https://zoom.us/en-us/trust"
              className="hover:underline text-xs"
            >
              Trust Center
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="https://zoom.us/en-us/acceptable-use-guidelines"
              className="hover:underline text-xs"
            >
              Acceptable Use Policy
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="https://zoom.us/en-us/acceptable-use-guidelines"
              className="hover:underline text-xs"
            >
              Acceptable Use Policy
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="https://zoom.us/en-us/trust/legal-compliance"
              className="hover:underline text-xs"
            >
              Legal & Compliance
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="javascript:void(null);"
              className="hover:underline text-xs"
            >
              Do Not Sell My Personal Information
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="javascript:void(null);"
              className="hover:underline text-xs"
            >
              Cookie Preferences
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
