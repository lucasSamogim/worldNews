import React, { useEffect, useState } from 'react';
import axios from "axios";


function Cardstest() {

    // Api-Token: AVeVgvGNScy93lOVZJ558nXSEfTH7V1JDtTSpqHy;
    
    // Languages: en(inglês) es(espanhol) fr(francês) it(italiano) ja(japonês) ko(coreano) pt(português) ru(russo) tr(turco) uk(ucraniano)

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
  }, []);

  const getNews = () => {
    axios.get("https://api.thenewsapi.com/v1/news/all?api_token=AVeVgvGNScy93lOVZJ558nXSEfTH7V1JDtTSpqHy&language=en&page=1")
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {
        news.map((info, key) => (
          <div key={key}>{info.url}</div>
        ))
      }
    </div>
  );
};

export default Cardstest;