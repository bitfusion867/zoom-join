const ZoomMobilePromo = () => {
  return (
    <section className="bg-[#d2e3fc] p-8 md:p-16 rounded-xl flex flex-col md:flex-row items-center justify-between gap-12 mx-auto">
      {/* Left Content Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Zoom Workplace for mobile
        </h2>

        <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
          Stay connected on your mobile device and never miss a beat, no matter
          where you are.
        </p>

        {/* App Store Badges */}
        <div className="flex flex-wrap gap-4 items-center pt-2">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <img
              src="/app-store-badge.png"
              alt="Download on the App Store"
              className="h-10 w-auto"
            />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <img
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* QR Code & Text Link */}
        <div className="space-y-4 pt-4">
          <div className="bg-white p-2 inline-block rounded-lg shadow-sm">
            <img
              src="/qr-code.png"
              alt="QR Code to download Zoom"
              className="w-24 h-24"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Scan the QR code or go to{" "}
            <a
              href="https://zoom.us/go"
              className="text-blue-600 hover:underline"
            >
              zoom.us/go
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="flex-1 w-full max-w-md md:max-w-none">
        <img
          src="/zoom-mobile-ui.png"
          alt="Person using Zoom App on smartphone"
          className="w-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default ZoomMobilePromo;
