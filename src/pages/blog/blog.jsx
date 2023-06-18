import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Blog() {

    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isRendering, setIsRendering] = useState(false);

    useEffect(() => {
        getNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setIsRendering(false);
    }, [news]);

    function getNews() {
        setIsLoading(true);

        axios.get(`https://api.thenewsapi.com/v1/news/top?api_token=FYG0rkTDlxnMzVlaaAU8U3V3cgRjNmG0fbDd49vO&locale=us&limit=3&page=${currentPage}`)
            .then((res) => {
                setNews(res.data.data);
                setIsRendering(true);
            }) 
            .catch((err) => {
                console.log(err);
                setIsRendering(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function handleClick() {
        setCurrentPage(currentPage + 1);
      }

    return (
        <div>
            <Header />
            {
                news.map((info, key) => (
                    <Cards 
                        key={key} 
                        url={info.url} 
                        urlImg={info.image_url} 
                        title={info.title} 
                        snippet={info.snippet}
                        source={info.source}
                    />
                ))
            }
            <div className='w-full flex items-center justify-center my-6'>
                <button
                    onClick={() => {
                        handleClick();
                        getNews();
                    }}
                    disabled={isLoading} // Desabilita o botão quando isLoading for true
                    className='px-3 py-2 text-white font-bold bg-sky-950 rounded hover:bg-sky-700'
                >
                    {isLoading ? 'Loading...' : 'Load More'} {/* Altera o texto do botão de acordo com o estado de isLoading */}
                </button>
            </div>
            {isRendering && (
                <div className='w-full flex items-center justify-center'>
                    <p>Loading new content...</p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Blog;