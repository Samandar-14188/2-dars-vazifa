import { GoChevronDown, GoSun } from "react-icons/go";
import { FiMoon } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {


  return (
    <header>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100px" height="80px" viewBox="0 0 318.000000 159.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,159.000000) scale(0.100000,-0.100000)"
fill="blue" stroke="none">
<path d="M321 1101 c-20 -20 -21 -32 -21 -301 l0 -281 25 -25 25 -25 303 3
302 3 56 26 c69 33 127 89 160 155 20 41 24 63 24 144 0 83 -4 101 -27 145
-31 60 -87 114 -148 146 -44 24 -51 24 -362 27 -308 3 -318 2 -337 -17z m629
-156 c100 -51 118 -191 35 -264 -44 -39 -91 -51 -193 -51 -82 0 -84 -1 -137
-41 -59 -44 -85 -46 -85 -6 0 31 -15 43 -65 50 -60 10 -65 23 -65 168 0 103 3
131 16 143 22 23 450 24 494 1z"/>
<path d="M1380 801 l0 -161 85 0 c99 0 143 15 174 58 49 69 33 188 -32 234
-26 19 -48 23 -129 26 l-98 4 0 -161z m186 58 c25 -27 25 -91 0 -118 -14 -15
-31 -21 -63 -21 l-43 0 0 80 0 80 43 0 c32 0 49 -6 63 -21z"/>
<path d="M1793 948 c-10 -13 -113 -288 -113 -301 0 -4 18 -7 39 -7 34 0 40 4
50 30 9 28 13 30 60 30 46 0 50 -2 60 -30 8 -25 15 -30 44 -30 18 0 36 2 39 5
5 5 -90 279 -105 303 -5 6 -21 12 -36 12 -16 0 -33 -6 -38 -12z m51 -122 c3
-13 9 -31 12 -40 5 -13 -1 -16 -26 -16 -25 0 -31 3 -26 16 3 9 9 27 12 40 3
13 10 24 14 24 4 0 11 -11 14 -24z"/>
<path d="M2020 799 l0 -160 38 3 37 3 3 53 c2 33 8 52 15 52 7 0 26 -24 43
-52 28 -49 33 -53 72 -56 23 -2 42 0 42 3 0 3 -13 29 -30 58 l-29 52 24 25
c34 35 40 77 18 120 -25 48 -54 60 -150 60 l-83 0 0 -161z m154 75 c9 -8 16
-19 16 -24 0 -15 -43 -40 -67 -40 -20 0 -23 5 -23 40 0 38 2 40 29 40 16 0 37
-7 45 -16z"/>
<path d="M2280 955 c0 -3 25 -52 55 -109 47 -87 55 -111 55 -155 l0 -52 38 3
37 3 5 60 c4 47 15 79 53 147 26 48 47 93 47 98 0 7 -17 10 -42 8 -42 -3 -44
-5 -72 -63 l-29 -60 -29 63 -28 62 -45 0 c-25 0 -45 -2 -45 -5z"/>
<path d="M2652 940 c-49 -30 -72 -75 -72 -141 0 -99 66 -164 166 -163 69 1
116 31 145 90 55 114 -22 234 -150 234 -38 0 -66 -6 -89 -20z m127 -65 c71
-36 58 -143 -19 -160 -54 -12 -99 28 -100 86 0 35 25 69 60 82 24 9 29 8 59
-8z"/>
</g>
</svg>

      <nav>
        <ul>
          <li >MAHALLIY ( UZB ) <GoChevronDown /></li>
          <li>MARKAZIY Osiyo <GoChevronDown /></li>
          <li>DUNYO</li>
          <li>PUL <GoChevronDown /></li>
          <li>MADANIYAT <GoChevronDown /></li>
          <li>LAYFSTAYL <GoChevronDown /></li>
          <li>SPORT <GoChevronDown /></li>
          <li>MULTIMEDIA</li>
        </ul>
        </nav>
        <div className="header-right">
        <FiMoon  />
        <GoSun  />
          <FaSearch />
            <select id="language">
              <option>O'zbekcha <GoChevronDown /></option>
              <option>Русский <GoChevronDown /></option>
            </select>
         
          <GiHamburgerMenu />
        </div>
    
    </header>
  );
}
