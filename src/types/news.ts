export interface News {
  id: number;
  newsTitle: string;
  newsContent: string;
  newImage: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}

export interface NewsContextType {
  news: News[];
  setNews: (news: News[]) => void;
}
