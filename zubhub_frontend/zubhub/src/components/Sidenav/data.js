import { GiNotebook } from 'react-icons/gi';
import { TEAM_ENABLED } from '../../utils.js';
import { RiLogoutBoxRFill, RiTeamFill } from 'react-icons/ri';
import {
    Bookmark,
    Dashboard,
    EmojiObjects,
    ExpandMore,
    FeaturedPlayList,
    Person,
    PostAddOutlined,
    Publish,
    Settings,
} from '@material-ui/icons';

export const links = ({ draftCount, myProjectCount, auth, i18n }) => [
    { label: i18n.t('pageWrapper.sidebar.projects'), link: '/', icon: Dashboard },
    { label: i18n.t('pageWrapper.sidebar.profile'), link: '/profile', icon: Person, reactIcon: true, requireAuth: true },
    { label: i18n.t('pageWrapper.sidebar.createProject'), link: '/projects/create', icon: EmojiObjects },
    ...(auth?.tags.includes('staff')
        ? [{ label: i18n.t('pageWrapper.sidebar.createActivity'), link: '/activities/create', icon: PostAddOutlined }]
        : []),
    {
        label: `${i18n.t('pageWrapper.sidebar.myDrafts')}(${draftCount})`,
        link: `/creators/${auth?.username}/drafts`,
        icon: GiNotebook,
        requireAuth: true,
    },
    {
        label: `${i18n.t('pageWrapper.sidebar.myProjects')}(${myProjectCount})`,
        link: `/creators/${auth?.username}/projects`,
        icon: Publish,
        requireAuth: true,
    },
    { label: i18n.t('pageWrapper.sidebar.bookmarks'), link: '/projects/saved', icon: Bookmark, requireAuth: true },
    ...(TEAM_ENABLED ? [{ label: i18n.t('pageWrapper.sidebar.teams'), link: '/teams/all', icon: RiTeamFill }] : []),
    { label: i18n.t('pageWrapper.sidebar.expoloreActivities'), link: 'https://kriti.unstructured.studio/', target: '_blank', icon: FeaturedPlayList },
];

export const bottomLinks = ({ i18n }) => [
    // { label: t('pageWrapper.sidebar.settings'), link: '/settings', icon: Settings, requireAuth: true },
    { label: i18n.t('pageWrapper.sidebar.logout'), action: 'logout', icon: RiLogoutBoxRFill, red: true, requireAuth: true },
];