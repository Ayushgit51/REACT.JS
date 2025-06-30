import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(true);
  const [password, setPassword] = useState("");

  // useRef HOOK
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  // Copy Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30); // For mobile devices
    window.navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-2 text-black bg-blue-200 outline-none"
            placeholder="Generated Password"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-800 text-white px-3 py-1 shrink-0 transition-colors duration-200 ease-out hover:bg-orange-700">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              calasName="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((numbers) => !numbers);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characters}
              id="characterInput"
              onChange={() => {
                setCharacters((characters) => !characters);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
