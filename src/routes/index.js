import routesConfig from '~/config/routes';
//layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { patch: routesConfig.home, component: Home },
    { patch: routesConfig.following, component: Following },
    { patch: routesConfig.profile, component: Profile },
    { patch: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { patch: routesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
