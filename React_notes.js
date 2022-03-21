/// React coding notes by Syed Ali Shahzil



// useState

//useState problem

//two state depend on eachother and updating sametime


//add new property into object of useState

 const [state, setState] = useState({
    name: '',
    age: '',
 })

  setstate((state) => ({
        ...state,
        Quantity: quantity,
        Disc1: disc,
        selected: false,
     }));


//useEffect







//Problem

//how to call a child component's function from its parent

const Parent = () => {
  const childFunc = React.useRef(null)

  return (
    <>
      <Child childFunc={childFunc} />
      <button onClick={() => childFunc.current()}>Click me</button>
    </>
  )
}

const Child = ({ childFunc }) => {
  React.useEffect(() => {
    childFunc.current = alertUser
  }, [])

  function alertUser() {
    alert('You clicked!')
  }

  return null
}

render(<Parent />)
