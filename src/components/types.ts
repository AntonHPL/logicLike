export type BarElement = {
  bgColor: string,
  id: string,
  image: string,
  name: string,
  tags: string[],
}

export type BarsProps = {
  selectedTag: string
}

export type MenuProps = {
  selectedTag: string,
  setSelectedTag: (selectedTag: string) => void,
}