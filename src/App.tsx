import React, { useState } from 'react'
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div>
      <Card onClick={(num) => console.log(num, 'click')} variant={CardVariant.primary} height='200px' width='200px'>
      <button>Кнопка</button>
      </Card>
    </div>
  )
}

export default App;