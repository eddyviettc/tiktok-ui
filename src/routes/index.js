//layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { patch: '/', component: Home },
    { patch: '/following', component: Following },
    { patch: '/:nickname', component: Profile },
    { patch: '/upload', component: Upload, layout: HeaderOnly },
    { patch: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
