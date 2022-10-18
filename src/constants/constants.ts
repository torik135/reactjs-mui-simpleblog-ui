import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  imglist,
} from '../assets';

export type avatarImgType = {
  imgSrc: string;
  imgAlt: string;
};

export const avatarImg: avatarImgType[] = [
  { imgSrc: avatar1, imgAlt: 'avatar-1' },
  { imgSrc: avatar2, imgAlt: 'avatar-2' },
  { imgSrc: avatar3, imgAlt: 'avatar-3' },
  { imgSrc: avatar4, imgAlt: 'avatar-4' },
  { imgSrc: avatar5, imgAlt: 'avatar-5' },
  { imgSrc: avatar6, imgAlt: 'avatar-6' },
  { imgSrc: avatar7, imgAlt: 'avatar-7' },
  { imgSrc: avatar8, imgAlt: 'avatar-8' },
];

export type sidebarMenuType = {
  href: string;
  icon: string;
  text: string;
};

export const sidebarMenu: sidebarMenuType[] = [
  {
    href: '#homepage',
    icon: 'Home',
    text: 'Home',
  },
  {
    href: '#pages',
    icon: 'Pages',
    text: 'Pages',
  },
  {
    href: '#groups',
    icon: 'Groups',
    text: 'Groups',
  },
  {
    href: '#marketplace',
    icon: 'Storefront',
    text: 'Marketplace',
  },
  {
    href: '#friends',
    icon: 'Person',
    text: 'Friend',
  },
  {
    href: '#settings',
    icon: 'Settings',
    text: 'Settings',
  },
  {
    href: '#profile',
    icon: 'AccountBox',
    text: 'Profile',
  },
];

export type postListType = {
  title: string;
  subheader: string;
  body: string;
};

export const postList: postListType[] = [
  { title: 'title one', subheader: 'subheader one', body: 'body one' },
  { title: 'title two', subheader: 'subheader two', body: 'body two' },
  { title: 'title three', subheader: 'subheader three', body: 'body three' },
  { title: 'title four', subheader: 'subheader four', body: 'body four' },
];

export type imgListType = {
  src: string;
  alt: string;
};

export const imgList: imgListType[] = [
  { src: imglist, alt: 'imglist1' },
  { src: imglist, alt: 'imglist2' },
  { src: imglist, alt: 'imglist3' },
  { src: imglist, alt: 'imglist4' },
];

export type convListType = {
  primary: string;
  name: string;
  msg: string;
};

export const convList: convListType[] = [
  { primary: 'Meta', name: 'mark', msg: 'its me mark' },
  { primary: 'Amazon', name: 'jeff', msg: 'my name is jeff' },
  { primary: 'YT', name: 'susan', msg: 'hi iam susan w' },
];
