import Image from "next/legacy/image";
import React from "react";
import img1 from "/public/assets/img1.jpg";
import img2 from "/public/assets/img2.jpg";
import img3 from "/public/assets/img3.jpg";

export default function galery() {
  return (
    <div>
      <Image layout="responsive" placeholder="blur" src={img1} width="2927" height="4545" alt="img1" />
      <Image layout="responsive" placeholder="blur"src={img2} width="4328" height="5773" alt="img2" />
      <Image layout="responsive" placeholder="blur" src={img3} width="5523" height="2540" alt="img3" />
      {/* <img src='/assets/img1.jpg' alt='img'/>
        <img src='/assets/img2.jpg' alt='img'/>
        <img src='/assets/img3.jpg' alt='img'/>  */}
    </div>
  );
}

// 1.9  40
// 2.3  47
// 1.5  43
