interface DataLinkExtra {
  text: string;
  url: string;
}

interface DataVideo {
  titulo: string;
  url: string;
}

interface DataCategory {
  titulo: string;
  link: string;
  cor?: string;
  link_extra?: DataLinkExtra;
  videos: DataVideo[];
}
