import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../assets/Svgs/Incridea-Stroke-Font.svg';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: white;

  svg {
    width: 30vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
        fill:white;
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 50vw;
    }
  }
`;

const Text = styled(motion.span)`
font-family:CinzelDecorative-Bold;
  font-size: 50px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },

};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = ({ animate }) => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >

      {/* <img src = {logo} alt="Incredia"/> */}

      <svg className={animate ? "animate-pulse transition ease-in-out  " : " "} version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="2480.000000pt" height="997.000000pt" viewBox="0 0 2480.000000 997.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,997.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M5075 8704 c-22 -2 -92 -9 -155 -15 -177 -16 -376 -53 -590 -108
      -797 -204 -1529 -681 -2053 -1336 -102 -128 -283 -401 -379 -575 -226 -406
      -378 -851 -434 -1275 -22 -172 -23 -526 -1 -677 31 -206 95 -414 180 -583 135
      -271 377 -507 649 -635 179 -84 429 -131 688 -131 178 0 270 12 425 57 310 90
      568 302 690 567 48 104 65 177 72 307 16 318 -110 526 -381 631 -189 73 -385
      56 -585 -52 -174 -93 -253 -200 -282 -379 -16 -94 -6 -105 99 -115 42 -3 105
      -13 140 -21 267 -60 358 -309 179 -488 -54 -53 -103 -70 -202 -69 -221 2 -383
      147 -495 445 -89 237 -115 406 -115 748 1 341 33 582 126 953 124 498 357 978
      657 1353 181 228 378 409 617 568 343 228 658 351 1055 413 93 15 176 18 440
      18 411 -1 605 -21 858 -92 l93 -26 -88 -37 c-262 -110 -468 -279 -691 -566
      -313 -402 -571 -938 -825 -1709 -101 -308 -235 -730 -262 -830 -9 -33 -45
      -154 -80 -270 -35 -115 -111 -379 -169 -585 -226 -798 -287 -998 -390 -1280
      -88 -242 -122 -322 -206 -490 -134 -269 -272 -439 -407 -503 -56 -26 -83 -32
      -153 -36 -152 -6 -253 35 -306 125 -78 134 19 351 179 399 87 26 144 16 227
      -40 84 -56 103 -48 163 71 47 93 69 173 68 254 0 309 -273 505 -676 487 -147
      -7 -237 -26 -332 -71 -256 -122 -366 -276 -438 -617 -85 -397 68 -733 411
      -900 175 -86 385 -129 630 -129 216 0 357 26 554 102 207 80 365 192 590 417
      230 231 382 439 578 791 258 463 528 1201 890 2430 132 448 219 745 268 919
      122 426 319 968 454 1248 181 374 317 560 490 672 64 42 166 81 210 81 32 0
      50 17 50 45 0 39 -221 191 -415 285 -218 105 -532 191 -866 236 -108 14 -655
      28 -754 18z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M17441 8643 c-5 -10 -25 -76 -46 -148 -20 -71 -70 -238 -110 -370
      -40 -132 -112 -370 -160 -530 -48 -159 -124 -414 -170 -565 -46 -151 -93 -307
      -104 -346 l-21 -70 -81 -18 c-675 -145 -1278 -640 -1634 -1341 -128 -252 -278
      -639 -334 -862 -34 -133 -28 -123 -71 -123 -37 0 -41 -3 -61 -42 -38 -74 -121
      -188 -168 -230 -62 -54 -176 -116 -229 -124 -55 -8 -111 8 -143 42 -35 37 -39
      156 -9 274 30 119 167 573 357 1185 41 132 77 249 80 260 2 11 42 139 88 285
      166 531 207 670 201 685 -5 13 -60 15 -411 15 l-405 0 -9 -22 c-5 -13 -48
      -149 -96 -303 -175 -566 -394 -1266 -505 -1620 -167 -529 -214 -773 -190 -988
      19 -165 61 -259 155 -345 79 -72 180 -105 320 -104 252 1 495 121 722 355 106
      111 212 249 262 344 l26 49 1 -161 c1 -130 5 -175 22 -238 46 -169 141 -285
      269 -328 55 -19 88 -23 173 -23 278 3 567 138 839 393 30 28 55 50 56 48 1 -1
      6 -33 13 -71 15 -93 70 -204 125 -251 161 -140 435 -157 685 -44 266 120 584
      444 717 731 21 46 35 53 35 17 0 -28 49 -188 82 -266 44 -108 120 -217 212
      -308 171 -168 333 -227 631 -228 244 -1 383 32 621 147 139 67 263 146 385
      244 102 82 325 314 433 450 49 61 91 110 93 108 2 -2 -4 -45 -12 -97 -22 -130
      -30 -348 -16 -435 34 -222 128 -358 287 -416 120 -43 348 -21 526 53 132 54
      341 190 468 303 l65 58 8 -33 c41 -176 66 -230 131 -287 122 -107 324 -144
      515 -93 128 34 194 64 318 147 227 151 407 364 549 651 47 94 84 179 82 190
      -3 15 -14 18 -73 21 l-70 2 -50 -92 c-66 -121 -143 -200 -253 -256 -145 -76
      -233 -68 -274 26 -17 37 -19 58 -14 111 7 78 62 286 151 571 35 113 73 239 85
      280 12 41 54 183 95 315 40 132 112 371 160 530 48 160 119 394 157 520 39
      127 71 236 72 244 1 18 -115 65 -228 91 -462 110 -1060 -63 -1556 -449 -111
      -86 -345 -315 -427 -416 -150 -186 -285 -413 -398 -665 -81 -182 -126 -264
      -233 -420 -189 -275 -405 -506 -639 -682 -178 -134 -288 -188 -456 -223 -88
      -19 -230 -19 -294 0 -63 19 -136 82 -168 145 -54 107 -88 308 -83 490 l3 104
      125 -3 c215 -5 371 28 578 121 184 83 306 169 467 332 162 162 238 267 325
      449 107 222 152 398 152 602 0 196 -48 336 -157 453 -64 69 -114 101 -204 132
      -234 78 -680 18 -973 -132 -403 -206 -766 -589 -978 -1030 -77 -162 -114 -263
      -159 -429 -58 -218 -91 -448 -91 -630 l0 -89 -45 0 -45 0 -31 -62 c-70 -139
      -169 -247 -283 -306 -40 -20 -66 -26 -118 -27 -61 0 -69 3 -98 30 -68 65 -63
      155 22 435 28 91 72 235 98 320 26 85 70 229 98 320 87 285 321 1076 426 1440
      101 348 188 647 250 855 174 582 233 779 288 960 112 368 119 397 107 411 -9
      11 -87 14 -415 14 -374 0 -404 -1 -413 -17z m1979 -2323 c62 -33 56 -282 -11
      -530 -59 -215 -232 -553 -371 -726 -143 -178 -343 -287 -449 -246 l-27 11 24
      108 c50 233 163 561 271 788 92 191 123 246 204 356 144 194 277 283 359 239z
      m-2764 -186 c21 -6 21 -6 -14 -117 -19 -62 -63 -206 -97 -322 -35 -115 -92
      -307 -128 -425 -241 -799 -298 -994 -314 -1064 l-17 -79 -95 -62 c-126 -83
      -167 -103 -232 -117 -142 -30 -186 45 -176 297 10 238 80 511 223 867 216 539
      459 908 659 1004 49 24 139 32 191 18z m5367 -1 c2 -5 -32 -125 -75 -268 -74
      -245 -126 -417 -287 -960 -38 -126 -100 -333 -139 -460 -38 -126 -73 -249 -77
      -271 -7 -46 -18 -58 -118 -128 -87 -61 -162 -95 -226 -103 -64 -7 -95 11 -124
      75 -19 41 -21 64 -21 182 2 222 48 442 159 754 95 267 287 667 406 841 105
      155 234 286 324 326 40 19 170 27 178 12z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M14710 8404 c-143 -21 -223 -58 -320 -150 -227 -215 -223 -573 9
      -800 109 -106 218 -148 381 -148 157 0 268 46 382 157 173 168 218 427 112
      646 -37 76 -160 199 -240 239 -93 47 -227 70 -324 56z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M12721 6474 c-194 -129 -355 -233 -356 -232 -2 2 21 77 51 168 29 91
      53 173 54 182 0 10 -10 20 -22 23 -13 3 -200 4 -417 3 l-394 -3 -13 -40 c-7
      -22 -51 -170 -99 -330 -48 -159 -118 -391 -155 -515 -38 -124 -78 -259 -90
      -300 -73 -256 -147 -480 -171 -515 -14 -22 -69 -105 -121 -185 -214 -328 -430
      -558 -723 -769 -184 -134 -331 -189 -527 -198 -113 -6 -119 -5 -173 21 -67 33
      -112 88 -154 191 -125 300 -120 746 15 1273 52 204 94 320 178 497 106 221
      240 399 363 481 152 101 345 99 454 -3 128 -119 177 -368 102 -520 -35 -73
      -112 -76 -173 -7 -42 48 -50 73 -50 152 0 55 4 74 25 104 39 58 35 65 -42 74
      -80 8 -175 -6 -235 -35 -98 -47 -204 -170 -247 -286 -52 -138 -47 -273 13
      -400 76 -160 194 -221 426 -218 236 3 407 79 577 255 107 112 185 253 229 414
      24 90 29 264 10 354 -39 188 -164 350 -328 428 -121 58 -205 75 -378 74 -413
      -1 -758 -133 -1100 -420 -423 -354 -711 -872 -815 -1463 -19 -108 -38 -365
      -31 -416 5 -38 3 -42 -17 -45 -15 -2 -31 -21 -52 -59 -76 -141 -150 -214 -282
      -276 -114 -54 -194 -67 -231 -37 -49 40 -47 122 8 329 43 163 71 243 340 966
      111 298 207 638 231 818 6 47 9 136 6 196 -9 199 -62 307 -179 364 -110 54
      -283 60 -423 15 -147 -48 -313 -172 -471 -352 -44 -49 -80 -86 -82 -82 -1 4
      27 102 63 219 36 116 65 218 65 226 0 8 -10 17 -22 20 -13 3 -200 4 -417 3
      l-394 -3 -8 -25 c-133 -444 -194 -645 -263 -875 -46 -154 -123 -410 -171 -570
      -48 -159 -125 -416 -171 -570 -215 -715 -257 -856 -328 -1090 -42 -138 -76
      -256 -76 -263 0 -6 10 -14 23 -17 12 -3 200 -4 417 -3 l395 3 17 55 c25 80
      172 570 273 905 48 160 125 414 171 565 46 151 86 289 90 305 8 35 169 405
      225 517 130 260 258 408 353 408 50 0 59 -62 26 -188 -25 -100 -139 -439 -223
      -667 -271 -732 -358 -1057 -358 -1345 -1 -269 75 -433 226 -489 398 -149 939
      168 1234 723 17 32 32 52 35 45 2 -8 13 -50 25 -94 84 -304 297 -553 548 -640
      103 -36 202 -49 363 -49 241 1 382 35 616 148 314 152 570 372 846 729 103
      132 100 130 79 61 -220 -720 -292 -966 -287 -980 5 -12 67 -14 418 -12 l413 3
      17 55 c21 70 162 542 273 915 125 420 243 812 334 1115 43 146 91 309 106 363
      15 53 31 97 34 97 4 0 14 -30 24 -67 56 -214 200 -362 381 -394 130 -22 278 6
      444 86 214 103 378 228 590 451 113 118 141 162 102 157 -8 -1 -47 -13 -86
      -27 -247 -86 -432 -30 -524 158 -54 110 -63 171 -56 351 4 88 9 179 12 203 5
      36 4 42 -12 41 -11 0 -178 -106 -373 -235z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M5033 3220 c-8 -19 -23 -56 -33 -82 -66 -163 -283 -560 -412 -752
      -49 -73 -200 -266 -276 -353 l-54 -63 2358 1 c1298 0 5408 7 9134 14 l6775 12
      83 22 c289 74 512 258 655 541 42 83 96 244 122 363 9 42 21 75 26 72 5 -4 9
      47 9 124 l0 131 -596 0 -597 0 -67 -24 c-90 -33 -206 -56 -278 -56 -68 0 -192
      29 -251 59 -38 20 -56 21 -394 21 -330 0 -358 -1 -413 -20 -217 -75 -426 -77
      -553 -5 l-43 25 -632 0 -631 0 -115 -27 c-103 -24 -134 -27 -295 -27 -163 0
      -189 3 -280 27 l-100 27 -641 0 -640 0 -74 -25 c-208 -71 -373 -71 -527 0
      l-55 25 -352 0 c-349 0 -351 0 -425 -25 -209 -71 -411 -71 -551 0 l-49 25
      -410 0 -411 0 -76 -26 c-100 -33 -210 -54 -288 -54 -71 0 -195 29 -255 59 -40
      21 -51 21 -964 21 l-923 0 -21 -49 c-20 -49 -21 -49 -74 -56 -30 -3 -229 -5
      -442 -3 l-389 3 -24 28 c-13 15 -24 39 -24 53 l0 24 -393 0 c-392 0 -392 0
      -507 -27 -104 -25 -133 -27 -300 -27 -168 1 -194 3 -285 27 l-100 27 -622 0
      -622 0 -88 -29 c-122 -41 -211 -55 -312 -48 -85 6 -196 36 -235 63 -17 11 -81
      14 -336 14 l-316 0 -21 -49 c-19 -46 -23 -50 -64 -56 -24 -3 -223 -5 -442 -3
      l-399 3 -24 28 c-13 15 -24 39 -24 52 l0 24 -211 3 -211 3 -15 -35z m4003
      -367 c70 -23 155 -111 175 -178 35 -122 4 -242 -82 -319 -60 -54 -121 -76
      -209 -76 -88 0 -149 22 -209 76 -70 63 -95 120 -95 214 0 57 5 87 23 128 28
      63 103 134 164 155 58 21 172 21 233 0z m3797 -3 c58 -22 131 -82 125 -102 -3
      -7 -16 -20 -31 -28 -25 -14 -28 -13 -59 17 -51 48 -96 66 -163 66 -131 0 -227
      -96 -227 -228 0 -132 95 -228 227 -229 67 0 110 18 163 67 31 30 34 31 59 17
      39 -22 39 -36 -4 -75 -61 -56 -131 -78 -238 -73 -79 3 -98 8 -145 34 -171 96
      -201 337 -59 473 24 22 66 50 94 61 69 26 187 27 258 0z m-5953 -275 l0 -285
      -40 0 -40 0 0 285 0 285 40 0 40 0 0 -285z m485 89 l170 -197 3 197 2 196 40
      0 40 0 0 -285 c0 -271 -1 -285 -19 -285 -11 0 -81 73 -187 195 l-169 195 -3
      -195 -2 -195 -40 0 -40 0 0 285 c0 265 1 285 18 285 10 0 88 -83 187 -196z
      m740 0 l170 -197 3 197 2 196 40 0 40 0 0 -285 c0 -271 -1 -285 -19 -285 -11
      0 -81 73 -187 195 l-169 195 -3 -195 -2 -195 -40 0 -40 0 0 285 c0 265 1 285
      18 285 10 0 88 -83 187 -196z m1509 -1 c45 -106 84 -195 87 -197 3 -3 43 84
      90 192 l86 197 41 3 c30 2 42 -1 41 -10 0 -7 -53 -134 -118 -283 -92 -212
      -122 -271 -138 -273 -19 -3 -63 92 -250 536 l-14 33 46 -3 47 -3 82 -192z
      m962 -72 c68 -146 126 -273 130 -283 5 -15 -1 -18 -38 -18 l-43 0 -44 95 -44
      95 -107 0 -107 0 -44 -95 -44 -95 -42 0 c-24 0 -43 4 -43 9 0 5 48 110 106
      232 59 123 117 248 130 277 42 93 49 84 190 -217z m644 239 l0 -30 -60 0 -60
      0 0 -255 0 -255 -40 0 -40 0 0 255 0 255 -65 0 -65 0 0 30 0 30 165 0 165 0 0
      -30z m570 0 l0 -30 -130 0 -130 0 0 -85 0 -85 130 0 130 0 0 -30 0 -30 -130 0
      -130 0 0 -110 0 -110 130 0 130 0 0 -30 0 -30 -170 0 -170 0 0 285 0 285 170
      0 170 0 0 -30z m1713 16 c18 -7 46 -28 61 -47 26 -30 28 -38 24 -102 -4 -65
      -6 -71 -40 -103 -27 -25 -50 -35 -87 -40 l-50 -6 94 -123 c52 -68 95 -126 95
      -129 0 -3 -21 -6 -47 -5 l-48 0 -100 131 -100 132 -3 -132 -3 -132 -39 0 -40
      0 0 285 0 285 125 0 c84 0 137 -5 158 -14z m697 -16 l0 -30 -130 0 -130 0 0
      -85 0 -85 130 0 130 0 0 -30 0 -30 -130 0 -130 0 0 -110 0 -110 130 0 130 0 0
      -30 0 -30 -170 0 -170 0 0 285 0 285 170 0 170 0 0 -30z m626 -239 c68 -146
      126 -273 130 -283 5 -15 -1 -18 -38 -18 l-43 0 -44 95 -44 95 -107 0 -107 0
      -44 -95 -44 -95 -42 0 c-24 0 -43 4 -43 9 0 5 48 110 106 232 59 123 117 248
      130 277 42 93 49 84 190 -217z m634 239 l0 -30 -60 0 -60 0 0 -255 0 -255 -40
      0 -40 0 0 255 0 255 -65 0 -65 0 0 30 0 30 165 0 165 0 0 -30z m570 0 l0 -30
      -130 0 -130 0 0 -85 0 -85 130 0 130 0 0 -30 0 -30 -130 0 -130 0 0 -110 0
      -110 130 0 130 0 0 -30 0 -30 -170 0 -170 0 0 285 0 285 170 0 170 0 0 -30z
      m700 -255 l0 -285 -40 0 -40 0 0 285 0 285 40 0 40 0 0 -285z m623 256 c95
      -46 147 -139 147 -261 0 -117 -48 -207 -133 -253 -37 -19 -60 -22 -199 -25
      l-158 -4 0 287 0 287 148 -4 c128 -4 153 -7 195 -27z m737 -1 l0 -30 -130 0
      -130 0 0 -85 0 -85 130 0 130 0 0 -30 0 -30 -130 0 -130 0 0 -110 0 -110 130
      0 130 0 0 -30 0 -30 -170 0 -170 0 0 285 0 285 170 0 170 0 0 -30z m626 -239
      c68 -146 126 -273 130 -283 5 -15 -1 -18 -38 -18 l-43 0 -44 95 -44 95 -107 0
      -107 0 -44 -95 -44 -95 -42 0 c-24 0 -43 4 -43 9 0 5 48 110 106 232 59 123
      117 248 130 277 42 93 49 84 190 -217z m634 239 l0 -30 -60 0 -60 0 0 -255 0
      -255 -40 0 -40 0 0 255 0 255 -65 0 -65 0 0 30 0 30 165 0 165 0 0 -30z m570
      0 l0 -30 -130 0 -130 0 0 -85 0 -85 130 0 130 0 0 -30 0 -30 -130 0 -130 0 0
      -110 0 -110 130 0 130 0 0 -30 0 -30 -170 0 -170 0 0 285 0 285 170 0 170 0 0
      -30z m-7786 -466 c35 -35 7 -84 -48 -84 -39 0 -56 15 -56 50 0 14 5 31 12 38
      17 17 74 15 92 -4z m4250 0 c35 -35 7 -84 -48 -84 -39 0 -56 15 -56 50 0 14 5
      31 12 38 17 17 74 15 92 -4z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M8870 2801 c-73 -23 -128 -71 -154 -133 -23 -53 -21 -150 4 -197 42
      -84 152 -143 232 -126 116 25 188 113 188 230 0 122 -81 214 -200 229 -25 3
      -56 1 -70 -3z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M10391 2623 l-41 -83 80 0 80 0 -33 68 c-19 37 -36 74 -39 82 -3 9
      -22 -19 -47 -67z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M13300 2705 l0 -95 60 0 c100 0 150 32 150 95 0 63 -50 95 -150 95
      l-60 0 0 -95z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M14641 2623 l-41 -83 80 0 80 0 -33 68 c-19 37 -36 74 -39 82 -3 9
      -22 -19 -47 -67z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M17090 2575 l0 -228 93 7 c124 8 171 32 209 105 38 72 38 146 2 219
      -40 81 -90 107 -225 118 l-79 7 0 -228z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M18531 2623 l-41 -83 80 0 80 0 -33 68 c-19 37 -36 74 -39 82 -3 9
      -22 -19 -47 -67z"/>
        </g>
      </svg>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg> */}
      {/* <Text variants={textVariants} initial="hidden" animate="visible">
        Incredia
      </Text> */}
    </Container>
  );
};

export default Loader;
