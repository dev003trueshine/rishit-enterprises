import MainLayout from '../layout/main';
import Home from '../view/index';
import About from '../view/about';
import Contact from '../view/contact';
import MangoProducts from '../view/mango-products';
import FruitsCatalog from '../view/fruits-catalog';
import ProductDetail from '../view/product-detail';
import RishitEnterprises from '../view/rishit-enterprises';
import Pricing from '../view/pricing';
import AllReview from '../view/allReview';
import GalleryView from '../view/gallery';

export const IndexRouter = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'mango-products',
                element: <MangoProducts />,
            },
            {
                path: 'fruits-catalog',
                element: <FruitsCatalog />,
            },
            {
                path: 'product-detail',
                element: <ProductDetail />,
            },
                {
                    path: 'rishit-enterprises',
                    element: <Home />,
                },
            {
                path: 'pricing',
                element: <Pricing />,
            },
            {
                path: 'all-review',
                element: <AllReview />,
            },
            {
                path: 'gallery',
                element: <GalleryView />,
            },
        ],
    },
];