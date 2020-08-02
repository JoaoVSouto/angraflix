interface DataLinkExtra {
  text: string;
  url: string;
}

interface DataVideo {
  titulo: string;
  url: string;
  description?: string;
}

interface DataCategory {
  titulo: string;
  link?: string;
  cor?: string;
  link_extra?: DataLinkExtra;
  addedNow?: boolean;
  videos: DataVideo[];
}
