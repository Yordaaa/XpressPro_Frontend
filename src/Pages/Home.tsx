import Features from '../Components/Features';
import Search from '../Components/Search';
import Testmonials from '../Components/Testmonials';

function Home() {
    return (
        <>
            <div
                className="lg:h-fit pb-20 bg-center max-w-screen-2xl mx-auto max-h-fit"
                style={{
                    backgroundImage:
                        'url("https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmahindra%2Fxuv-3xo%2Fmahindra-xuv-3xo.jpg%3Fv%3D28&w=640&q=75")',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundBlendMode: 'darken'
                }}
            >
                <div className="px-6 pt-14 lg:px-8">
                    <div className="text-center">
                        <h1 className=" use text-4xl font-bold tracking-tight text-white sm:text-7xl">
                            Looking for a <span className="text-green-600 font-bold">vehicle?</span>
                        </h1>
                        <div className="text-4xl text-white">You're in the right place.</div>
                    </div>
                </div>
                <Search />
            </div>
            <Features />

            <Testmonials />
        </>
    );
}

export default Home;
