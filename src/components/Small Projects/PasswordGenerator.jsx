import { useCallback, useEffect, useState, useId } from "react";
import { CheckCircle, X } from "lucide-react";
import { smallProjects } from "../../constants";
import ClipboardJS from "clipboard";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const rangeId = useId();
  const numId = useId();
  const charId = useId();
  let clipboard = new ClipboardJS("#copy");

  const passGen = useCallback(() => {
    setIsToast(false);
    let passkey = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let char = "!@#$%^&*";

    const randomIndex = (l) => {
      return Math.floor(Math.random() * (l - 1));
    };

    if (numAllow) {
      str += num;
    }
    if (charAllow) {
      str += char;
    }

    let numIndex = randomIndex(length);
    let charIndex = randomIndex(length);
    while (charIndex == numIndex) {
      charIndex = randomIndex(length);
    }

    for (let i = 1; i <= length; i++) {
      if (numAllow && i == numIndex) {
        passkey += num.charAt(randomIndex(Number(num.length)));
      } else if (charAllow && i == charIndex) {
        passkey += char.charAt(randomIndex(Number(num.length)));
      } else {
        passkey += str.charAt(randomIndex(Number(str.length)));
      }
    }

    return passkey;
  }, [numAllow, charAllow, length]);

  const copyHandler = (e) => {
    setIsToast(true);
    e.preventDefault();
  };

  useEffect(() => {
    setPassword(passGen());
  }, [numAllow, charAllow, length,passGen]);

  useEffect(() => {
    setTimeout(() => {
      setIsToast(false);
    }, 5000);
  }, [isToast]);
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center font-semibold mb-[1rem] text-[2rem]">
        Password Generator
      </h1>
      <form className="bg-tertiary flex flex-col items-center justify-center p-[1.5rem] rounded-2xl">
        <div className="p-1 flex">
          <input
            className="p-1 text-center w-[15rem] bg-slate-700 rounded-l"
            id="password"
            type="text"
            value={password}
            readOnly
          />
          <button
            className="bg-sky-500 hover:bg-sky-600 p-1 rounded-r"
            data-clipboard-target = "#password"
            id="copy"
            onClick={copyHandler}
          >
            copy
          </button>
        </div>
        <div className="flex items-center justify-center mt-[0.75rem] flex-col md:flex-row">
          <input
            className="mr-2"
            type="range"
            name="range"
            id={rangeId}
            min="5"
            max="20"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor={rangeId}>Length : {length} </label>
          <div>
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
          </div>
          <div>
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
            <label htmlFor={charId}>Character</label>
          </div>
        </div>
      </form>
      <p className="text-left mx-[2rem] mt-4 text-[1.1rem] w-[90%] md:w-[60%]">
        {smallProjects[1].desc}
      </p>
      {isToast ? (
        <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 fixed top-[5rem] right-[1rem]">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">
                Your password is copied sucessfully!!
              </p>
            </div>
            <div>
              <X
                onClick={() => setIsToast(false)}
                className="h-6 w-6 cursor-pointer text-green-600"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PasswordGenerator;
