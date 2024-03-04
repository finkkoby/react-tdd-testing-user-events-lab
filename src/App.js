import { useState } from "react";
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [coding, setCoding] = useState(false)
  const [painting, setPainting] = useState(false)
  const [reading, setReading] = useState(false)
  const [submit, setSubmit] = useState(false)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleCodingCheck() {
    setCoding(!coding)
  }

  function handlePaintingCheck() {
    setPainting(!painting)
  }

  function handleReadingCheck() {
    setReading(!reading)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(true)
  }

  console.log(name, email)

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          id="name"
        />
        <label htmlFor="email">Email Address: </label>
        <input
          type="text"
          placeholder="email address"
          value={email}
          onChange={handleEmailChange}
          id="email"
        />
        <label>Select interests:</label>
        <input
          type='checkbox'
          checked={coding}
          id='coding'
          onChange={handleCodingCheck}
        />
        <label htmlFor="coding">Coding</label>
        <input
          type='checkbox'
          checked={painting}
          id='painting'
          onChange={handlePaintingCheck}
        />
        <label htmlFor="painting">Painting</label>
        <input
          type='checkbox'
          checked={reading}
          id='reading'
          onChange={handleReadingCheck}
        />
        <label htmlFor="reading">Reading</label>
        <button type='submit'>Submit</button>
      </form>
      {
        submit ? <h3>Thank you for submitting your form!</h3> : null
      }
    </main>
  );
}

export default App;
