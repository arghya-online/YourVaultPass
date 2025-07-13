import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef();

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&()-_+/{([])}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassWordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, Password.length);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0d0d0d] via-[#101010] to-[#0b0b0b] p-4 sm:p-6 md:p-10 text-white flex flex-col items-center">
      
      {/* Header */}
      <motion.div
        className="text-center mb-10 max-w-2xl px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-300 mb-4">
          VaultKey
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          A private, secure password generator that anyone can use — no tech skills needed. Create strong, random passwords instantly.
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          All local, nothing stored. Ever.
        </p>
      </motion.div>


      <motion.div
        className="w-full max-w-lg bg-[#121212] border border-gray-700 rounded-2xl shadow-xl px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#1a1a1a] border border-gray-600 rounded-lg mb-6 p-3">
          <input
            type="text"
            value={Password}
            readOnly
            ref={passwordRef}
            placeholder="Generated password"
            className="flex-1 px-3 py-2 text-cyan-300 bg-transparent placeholder-cyan-500 outline-none text-sm sm:text-base"
          />
          <button
            onClick={copyPassWordToClipboard}
            className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-white font-semibold rounded transition duration-200"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <label htmlFor="lengthRange" className="text-sm sm:text-base">Password Length</label>
            <input
              id="lengthRange"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full sm:w-3/4 accent-cyan-500"
            />
            <span className="text-cyan-400 font-bold">{length}</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-cyan-500"
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-cyan-500"
            />
            <label htmlFor="charInput">Include Special Characters</label>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="mt-12 max-w-xl w-full px-4 sm:px-0 p-6 bg-[#181818] border border-gray-700 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg sm:text-xl font-bold pl-4 text-cyan-300 mb-4">How VaultKey Works</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-400">
          <li>Choose the length of your password using the slider.</li>
          <li>Toggle whether to include numbers or special characters.</li>
          <li>A secure password is generated instantly.</li>
          <li>Click “Copy” to store it to your clipboard.</li>
        </ul>
        <p className="mt-4 text-sm pl-4 text-cyan-400">
          Everything runs locally — we never collect or store your data.
        </p>
      </motion.div>
    </div>
  );
}

export default App;
