export interface DriveFile {
  id: string;
  name: string;
  viewLink: string;
  downloadLink: string;
}

export interface DriveApiResponse {
  files: Array<{ id: string; name: string }>;
}
