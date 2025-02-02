// rafceと入力後にタブキーを押します🤗
import React from "react";
import AccessibilityIcon from '@mui/icons-material/Accessibility'; // 追加
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <Link href={"/login"}>
          
            {/* ↓↓ 追加 */}
            <AccessibilityIcon /> 
            ログイン

          </Link>
        </li>
        
        <li>
          <Link href={"/signup"}>
          
            <AirplanemodeActiveIcon />
            登録  
          </Link>
        
        </li>
      </ul>
    </div>
  );
};

export default Header;