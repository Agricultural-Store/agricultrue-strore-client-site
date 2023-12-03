export interface News {
  id: number;
  newsTitle: string;
  newsContent: string;
  newImage: string;
  userId: number;
  createAt: string;
  updateAt: string;
  newsCategory?: string;
  publisherDate?: string;
}

export interface NewsContextType {
  news: News[];
  setNews: (news: News[]) => void;
}
