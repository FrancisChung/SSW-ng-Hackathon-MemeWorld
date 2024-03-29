export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export interface Data {
  memes: Meme[];
}

export interface MemeJSON {
  success: boolean;
  data: Data;
}
