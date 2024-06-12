import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { ALL_CATEGORIES, URL } from "./helpers";
import {
  StyledDataContainer,
  StyledBar,
  StyledImageContainer,
  StyledImage,
  StyledText,
} from '../styles/Bars.styled';
import { BarsProps, BarElement } from './types';

const Bars: FC<BarsProps> = ({ selectedTag }) => {
  const [data, setData] = useState<BarElement[] | null>(null);
  const [dataToShow, setDataToShow] = useState<BarElement[] | null>(null);

  useEffect(() => {
    axios.get(URL).then(({ data }) => setData(data))
  }, [])

  useEffect(() => {
    if (data) {
      setDataToShow(selectedTag === ALL_CATEGORIES
        ? data
        : data.filter(({ tags }) => tags.includes(selectedTag))
      )
    }
  }, [data, selectedTag])

  return (
    dataToShow?.length && (
      Array.apply(null, Array(Math.ceil(dataToShow.length / 3 / 2))).map((_, i, arr) => (
        <StyledDataContainer
          $rowsNumber={Math.ceil(dataToShow.length / 3)}
          $isLast={i === arr.length - 1}
        >
          {dataToShow.slice(i, i + 6).map(({ bgColor, id, image, name }) => (
            <StyledBar key={id}>
              <StyledImageContainer $bgColor={bgColor}>
                <StyledImage src={image} />
              </StyledImageContainer>
              <StyledText data-name="text">{name}</StyledText>
            </StyledBar>
          ))}
        </StyledDataContainer>
      ))
    )
  ) ?? null
}

export default Bars;
