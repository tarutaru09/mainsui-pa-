import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: red;
`
const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 600px;
  background-color: gray;
  transform: translate(-50%, -50%);
`

const Face = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: yellow;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

const Field = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  display: inline-block;
  width: 360px;
  height: 360px;
  background-color: white;
  transform: translate(-50%, -50%);
`

const Block = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  background-color: gray;
  border: solid black 5px;
`
const Home: NextPage = () => {
  return (
    <Container>
      <Board>
        <Face></Face>
        <Field>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Field>
      </Board>
    </Container>
  )
}

export default Home
