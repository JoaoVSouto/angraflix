interface DataLinkExtra {
  text: string;
  url: string;
}

interface DataVideo {
  id: number;
  categoriaId: number;
  titulo: string;
  url: string;
  description?: string;
}

interface DataCategory {
  id: number;
  titulo: string;
  cor?: string;
  link_extra?: DataLinkExtra;
  addedNow?: boolean;
  videos: DataVideo[];
}
