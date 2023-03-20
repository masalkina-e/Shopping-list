import { useState } from 'react';
import 'components/App/App.css';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Молоко",
      checked: false,
    }, 
    {
      id: 2,
      title: "Хлеб",
      checked: false
    },
    {
      id: 3,
      title:"Шоколад",
      checked: false
    },
    {
      id: 4,
      title: "Яйца",
      checked: false
    },
    {
      id: 5,
      title:"Апельсины",
      checked: false
    }
  ])

  function deleteItem(id) {
    const filteredItem = items.filter(item => item.id !== id)
    setItems(filteredItem)
  }

  function checkItem(id) {
    let newItems = [...items]
  
    let newItem = newItems.find((newItem) => {
      return newItem.id === id
    })

    if (newItem.checked === false) {
      newItem.checked = true
    } else {
      newItem.checked = false
    }

    const index = newItems.indexOf(newItem)
    newItems.splice(index, 1, newItem)

    setItems(newItems)
  }

  return (
    <div className="py-0 px-10 my-24 mx-auto w-full sm:w-1/2">
      <h1 className='text-5xl font-semibold pb-10'>Список покупок</h1>
      <div className='flex flex-col gap-1.5'>
        {items.map((item) => {
          return (
            <div key={item.id} className='flex flex-row justify-between items-center'>
              <p className='text-xl'>{item.title}</p>
              <div className='flex flex-row gap-2.5'>
                <button onClick={() => checkItem(item.id)}>
                  {item.checked === false && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {item.checked === true && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lime-600"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
                </button>
                <button onClick={() => deleteItem(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;