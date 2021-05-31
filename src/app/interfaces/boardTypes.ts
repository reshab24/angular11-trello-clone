export interface boardData {
  id: number,
  heading:string
  cards:cardType [],
}

export interface cardType{
  id:number,
  data:string,
  title:string,
}
