import styled from 'styled-components'

export default styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  > * {
    margin: 10px;
  }
`