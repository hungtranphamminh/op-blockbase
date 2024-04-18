interface PostInfo{
  title:string,
  description?:string,
  rating?:number,
  imgUrl:string,
  createdAt?:string
}

interface RandomSectionProp {
  title: string;
  mainPost: PostInfo;
  sidePost: PostInfo[];
}