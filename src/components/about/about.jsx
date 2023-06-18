function About() {
    return (
        <div className="flex flex-col md:flex-row p-6">


            <div className="basis-1/2 py-6 pr-6">
                <h2 className="text-red-400 font-bold text-5xl">
                    About Us
                </h2>
                <p className="text-slate-500 pt-3 pb-3">
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
                    <br /><br />
                    This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </p>
                <img className="w-full rounded" src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tablet"/>
            </div>


            <div className="basis-1/2 sm:mx-auto sm:w-full sm:max-w-md">
                <div>
                    <div className="w-64 h-1 bg-sky-950 rounded-sm mb-2"></div>

                    <span className="font-extralight">Advertise With US</span>

                    <div className="w-full py-4">
                        <h2 className="font-bold text-sky-800 text-2xl">
                            For all Inquiries about Advertising with Us, Please  Email: &nbsp;
                            <span className="text-red-500 cursor-pointer">email@myemail.com</span>
                        </h2>

                        <p className="font-extralight mt-6 pr-20">
                            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                        </p>
                    </div>

                    <div className="w-64 h-1 bg-sky-950 rounded-sm mb-10"></div>
                </div>
                <h2 className="pb-4 text-red-400 font-bold text-5xl">Contact Us</h2>
                <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
                    <form className="mb-0 space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <div className="mt-1">
                                <input id="name" name="name" type="text" autoComplete="name" required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-950 focus:ring-sky-950" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-950 focus:ring-sky-950" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="msg" className="block text-sm font-medium text-gray-700">Message</label>
                            <div className="mt-1">
                                <textarea id="msg" name="msg" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-950 focus:ring-sky-950"></textarea>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-700 hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;