import React from 'react';
import { Link } from 'react-router-dom';

const HomePageLayout: React.FC = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  //
  // // Fungsi untuk mengaktifkan mode gelap
  // const enableDarkMode = (): void => {
  //   document.body.classList.add('dark-mode');
  //   setIsDarkMode(true);
  // };
  //
  // // Fungsi untuk menonaktifkan mode gelap
  // const disableDarkMode = (): void => {
  //   document.body.classList.remove('dark-mode');
  //   setIsDarkMode(false);
  // };
  //
  // // Fungsi untuk beralih antara mode gelap dan terang
  // const toggleDarkMode = (): void => {
  //   document.body.classList.toggle('dark-mode');
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <div>
      <h1>Hello there</h1>
      {/* <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}> */}
      {/*  /!* Konten aplikasi Anda di sini *!/ */}

      {/*  /!* Tombol untuk mengaktifkan mode gelap *!/ */}
      {/*  <button onClick={enableDarkMode}>Enable Dark Mode</button> */}

      {/*  /!* Tombol untuk menonaktifkan mode gelap *!/ */}
      {/*  <button onClick={disableDarkMode}>Disable Dark Mode</button> */}

      {/*  /!* Tombol untuk beralih antara mode gelap dan terang *!/ */}
      {/*  <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      {/* </div> */}
      <nav>
        <ul>
          <li>
            <Link to="/table-antd">Table Ant Design</Link>
          </li>
          <li>
            <Link to="/table-mui">Table MUI</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePageLayout;
