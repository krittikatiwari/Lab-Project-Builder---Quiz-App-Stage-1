export default function () {
    return(
        <div className="border">
            <div  className="top" >
                <h1>Question</h1>
            </div>
            <div className="left">
                1 of 15 
            </div>
            <div className="ques">
                Which is the only mammal that can jump?
            </div>
            <div className="grid">
                <div className="option">Dog</div>
                <div className="option">Elephant</div>
                <div className="option">Goat</div>
                <div className="option">Lion</div>
            </div>
            <div>
                <button className="prev">Previous</button>
                <button className="next">Next</button>
                <button className="quit">Quit</button>
            </div>
        </div>
    )
}