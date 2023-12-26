//module
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

//css
import '../css/TextRenderStyle.css'

const data={
    "introduceMySelf": "안녕하세요. 소통팀 선두주자 신정환입니다.",
    "skill": ["react", "reactNative", "spring", "node.js"]
}

const TypingIntro = () => {
    return(
        <TypeAnimation 
        sequence={[
                // Same substring at the start will only be typed out once, initially
        '안녕하세요. 소통 \'잘\' 하는 개발자 신정환입니다.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '성장할 수 있다면 가리지 않고 배우며',
        1000,
        '성장할 수 있다면 색다른 경험을 도전하는 것을 즐깁니다.',
        1000,
        'Let\'s get this show on the road',
        1000
        ]}
        wrapper="span"
        speed={33}
        style={{fontFamily:'Noto Sans CJK KR', fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        />
    )
}

function TextRenderPage() {

    return (
        <div className="firstStep">
            <TypingIntro/>
        </div>
    );
}

export default TextRenderPage;