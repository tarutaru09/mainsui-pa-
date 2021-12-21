import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

const COLORS = ['blue', 'green', 'red', 'yellow', 'brown', 'pink', 'black', 'purple']

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

const Block = styled.div<{ isOpen: boolean; num: number }>`
  display: inline-block;
  width: 40px;
  height: 40px;
  font-weight: bold;
  color: ${(col) => COLORS[col.num - 1]};
  text-align: center;
  vertical-align: bottom;
  background-color: ${(props) => (props.isOpen ? 'white' : 'gray')};
  border: solid black 5px;
`
const Home: NextPage = () => {
  // prettier-ignore
  const [board, setBoard] = useState([
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ])

  const onClick = (x: number, y: number) => {
    console.log(x, y)
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))

    newBoard[y][x] = 1

    setBoard(newBoard)
  }

  return (
    <Container>
      <Board>
        <Face></Face>
        <Field>
          {board.map((row, y) =>
            row.map((num, x) => (
              <Block key={`${x}-${y}`} isOpen={num < 9} num={num} onClick={() => onClick(x, y)}>
                {num < 9 && num > 0 && num}
              </Block>
            ))
          )}
        </Field>
      </Board>
    </Container>
  )
}

export default Home
