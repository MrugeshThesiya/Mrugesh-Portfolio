import { useCallback, useEffect, useState, useId, useRef } from "react";

function PasswordGenrator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const rangeId = useId();
  const numId = useId();
  const charId = useId();
  const passwordRef = useRef(null);

  useEffect(() => {
    setPassword(passGen());
  }, [numAllow, charAllow, length]);

  const passGen = useCallback(() => {
    let passkey = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * (str.length - 1));
      passkey += str.charAt(randomIndex);
    }

    return passkey;
  }, [numAllow, charAllow, length, setPassword]);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center font-semibold my-[2rem] text-[2rem]">
        Password Generator
      </h1>
      <form
        className="bg-tertiary h-[8rem] flex flex-col items-center justify-center p-[1.5rem] rounded-2xl"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="p-1 flex flex-col md:flex-row">
          <input
            className="p-1 text-center w-[15rem]"
            type="text"
            value={password}
            disabled
            ref={passwordRef}
          />
          <button
            className="bg-sky-500 hover:bg-sky-600 p-1 rounded-r"
            onClick={() => {
              passwordRef.current.select();
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center mt-[0.75rem]">
          <input
            className="mr-2"
            type="range"
            name="range"
            id={rangeId}
            min="1"
            max="20"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor={rangeId}>Length : {length} </label>
          <input
            className="ml-5 mr-1"
            type="checkbox"
            name="numAllow"
            id={numId}
            checked={numAllow}
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor={numId}>Number</label>
          <input
            className="ml-5 mr-1"
            type="checkbox"
            name="charAllow"
            id={charId}
            checked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor={numId}>Character</label>
        </div>
      </form>
    </div>
  );
}

export default PasswordGenrator;
