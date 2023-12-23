

const data={
    "introduceMySelf": "안녕하세요. 사람 만나는것을 좋아하고 지식을 공유하는것을 즐깁니다.",
    "skill": ["react", "reactNative", "spring", "node.js"]
}


function TextRenderPage() {
const myData = data // 자기소개
    return (
        <div>
            <p>{myData.introduceMySelf}</p>
        </div>
    );
}

export default TextRenderPage;