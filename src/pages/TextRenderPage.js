//module
import { useEffect, useState } from "react";

//css
import '../css/TextRenderStyle.css'

const data={
    "introduceMySelf": "안녕하세요. 소통팀 선두주자 신정환입니다.",
    "skill": ["react", "reactNative", "spring", "node.js"]
}


//타이핑 애니메이션
const TypingIntro = () => {
    const introText = data.introduceMySelf;
    const [indicateIntro, setIndicateIntro] = useState(''); //표시할 텍스트
    const [count, setCount] = useState(0); // 시간에 따른 타이핑 효과

    
    useEffect(() => {
        const typingInterval = setInterval(() =>{
            setIndicateIntro((preValue) =>{
                let result = preValue ? preValue + introText[count] : introText[0];
                setCount(count + 1);

                if( count >= introText.length){ // 만약 모든 글을 다쳤다면 초기화
                    setCount(0);
                    setIndicateIntro('');
                }
                
                return result;
            });
        }, 100)

        return () => {
            clearInterval(typingInterval)
        };
    });

    return <p className="introMySelf">{indicateIntro}</p>

}

function TextRenderPage() {

    return (
        <div className="firstStep">
            <TypingIntro/>
        </div>
    );
}

export default TextRenderPage;