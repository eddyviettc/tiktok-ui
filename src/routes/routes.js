import config from '~/config';
//layouts
import { HeaderOnly } from '~/layouts';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { patch: config.routes.home, component: Home },
    { patch: config.routes.following, component: Following },
    { patch: config.routes.profile, component: Profile },
    { patch: config.routes.upload, component: Upload, layout: HeaderOnly },
    { patch: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
