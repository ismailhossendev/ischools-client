import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-800 text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl" bis_skin_checked="1">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
                        <span className="text-violet-400">laborum doloribus</span>delectus
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center" bis_skin_checked="1">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Courses</button>
                    </div>
                </div>
            </section>
    );
};

export default Hero;