import {Coment} from "./coment";
import {HashTags} from "./HashTags";

export class Blog {
  id:number;
  image:string;
  date:number;
  button:string;
  header:string;
  ncomments:number;
  author:string;
  content:string;
  comments:Coment[];
   hashtags:string[];
  hashtags1:string;
  hashtags2:string;
  hashtags3:string;
  hashtags4:string;
}

