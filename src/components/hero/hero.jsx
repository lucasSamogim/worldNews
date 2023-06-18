function Hero() {
    return (
        <section className="w-full h-[360px] flex flex-col sm:flex-row justify-evenly bg-[url('https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover">
            <div className="lg:px-16">
                <h1 className="text-4xl sm:text-6xl text-white text-center px-16 pt-16 pb-4 font-bold">
                    See What's Happening <br /> <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FF0000] to-[#f15858] sm:text-7xl">Around The World</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;