
import './App.css';
import Publication from "./Components/Publications/publication";
import ANAKIN_IMG from './persons/Anakin.webp'

function App() {
    const RAY_IMG = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    const publications = [
        {
            id: 1,
            author: {
                name: "Anakin Skywalker",
                photo: ANAKIN_IMG,
                nickname: "@dart_vader",
            },
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMG,
            date: "28 лютого",
            coments: 482,
            reposts: 146,
            likes: 887,
            downloads: 0
        },



    ]

  return (

    <div className="App">
        <div className="wrapper">
            <div className="container">
                {
                    publications.map((post) => <Publication data = {post} key={post.id}/> )
                }

            </div>
        </div>

    </div>
  );
}

export default App;
