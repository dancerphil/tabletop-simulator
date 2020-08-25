// @ts-nocheck
import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Board } from './Board'
const containerStyle = {
    width: 500,
    height: 500,
    border: '1px solid gray',
}

export const TutorialApp = () => {
    return (
        <div>
            <div style={containerStyle}>
                <Board />
            </div>
        </div>
    )
}

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TutorialApp />
    </DndProvider>
  )
}

export default App;
