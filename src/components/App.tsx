import { useState } from 'react'
import { StyledAppContainer } from '../styles/App.styled'
import Menu from './Menu'
import Bars from './Bars'
import { ALL_CATEGORIES } from './helpers'

const App = () => {
  const [selectedTag, setSelectedTag] = useState<string>(ALL_CATEGORIES);

  return (
    <StyledAppContainer>
      <Menu
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <Bars selectedTag={selectedTag} />
    </StyledAppContainer >
  )
}

export default App;
