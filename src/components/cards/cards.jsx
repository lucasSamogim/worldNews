function Cards({ url, urlImg, title, snippet, source }) {

    // Api-Token: AVeVgvGNScy93lOVZJ558nXSEfTH7V1JDtTSpqHy;
    
    // Languages: en(inglês) es(espanhol) fr(francês) it(italiano) ja(japonês) ko(coreano) pt(português) ru(russo) tr(turco) uk(ucraniano)

    return (
        <div>
            <div id="card" className="w-full p-6 flex flex-col md:flex-row">
                <div id="card__img" className="flex-auto w-full">
                    <img className="w-full md:p-4" src={urlImg} alt={source} />
                </div>
                <div id="card__news" className="w-full md:py-6">
                    <div className="pt-2 md:px-2 text-3xl md:text-4xl text-sky-950 md:pt-4">
                        <a className="hover:underline" href={url} target="_blank" rel="noreferrer">{title}</a>
                    </div>
                    <div className="md:px-4 md:pr-8 md:mt-10 md:text-lg text-slate-600 text-extralight border-b-2 border-sky-950 pb-8">
                        {snippet}
                    </div>
                </div>
            </div>


            {/* <div id="card" className="w-full p-6 flex flex-col md:flex-row">
                <div id="card__img" className="flex-auto w-full">
                    <img className="w-full md:p-4" src="https://i.guim.co.uk/img/media/b2607610e337a3c97efcef2d19d32f136701d9ee/0_100_3000_1800/master/3000.jpg?width=620&quality=45&dpr=2&s=none" alt="President Joe Biden" />
                </div>
                <div id="card__news" className="w-full md:py-6">
                    <div className="pt-2 md:px-2 text-3xl md:text-4xl text-sky-950 md:pt-4">
                        <a className="hover:underline" href="https://www.theguardian.com/us-news/2023/jun/17/joe-biden-union-rally-philadelphia-2024-campaign" target="_blank" rel="noreferrer">Joe Biden rallies with union workers in Philadelphia: 'You built America'</a>
                    </div>
                    <div className="md:px-4 md:pr-8 md:mt-10 md:text-lg text-slate-600 text-extralight border-b-2 border-sky-950 pb-8">
                        At his first political rally since announcing his re-election campaign for president in April, Joe Biden told a crowd of labor union supporters: “Wall Street didn't build America - you did.”
                    </div>
                </div>
            </div>


            <div id="card" className="w-full p-6 flex flex-col md:flex-row">
                <div id="card__img" className="flex-auto w-full">
                    <img className="w-full md:p-4" src="https://s2-ge.glbimg.com/dVt1jJ27TgH2QZbvtp-tVePcois=/0x0:4500x3000/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/k/G/6PSjHtSUub4pzEkWPe2A/gettyimages-1489847681.jpg" alt="Carlo Ancelotti" />
                </div>
                <div id="card__news" className="w-full md:py-6">
                    <div className="pt-2 md:px-2 text-3xl md:text-4xl text-sky-950 md:pt-4">
                        <a className="hover:underline" href="https://ge.globo.com/futebol/selecao-brasileira/noticia/2023/06/17/luis-roberto-cbf-da-como-certa-a-contratacao-de-ancelotti.ghtml" target="_blank" rel="noreferrer">Luís Roberto: CBF dá como certa a contratação de Ancelotti</a>
                    </div>
                    <div className="md:px-4 md:pr-8 md:mt-10 md:text-lg text-slate-600 text-extralight border-b-2 border-sky-950 pb-8">
                        A CBF dá como certa a contratação do técnico Carlo Ancelotti, que tem contrato até o meio do ano que vem com o Real Madrid. A informação foi divulgada pelo narrador da TV Globo, Luís Roberto, durante a transmissão do amistoso Brasil x Guiné, neste sábado.
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Cards;