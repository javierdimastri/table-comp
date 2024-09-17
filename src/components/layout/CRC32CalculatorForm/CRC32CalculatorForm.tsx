import crc32 from 'crc-32';
import React, { useState } from 'react';

const CRC32CalculatorForm: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [crcValue, setCrcValue] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    const crc = crc32.str(newValue);
    setCrcValue(crc >>> 0); // Konversi ke unsigned integer
  };

  return (
    <div>
      <h1>CRC32 Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter your string here"
      />
      {crcValue !== null && (
        <div>
          <h2>CRC32 Checksum:</h2>
          <p>{crcValue}</p>
        </div>
      )}
    </div>
  );
};

export default CRC32CalculatorForm;
