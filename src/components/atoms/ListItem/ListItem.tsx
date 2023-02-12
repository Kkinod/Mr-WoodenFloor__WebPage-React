import React from 'react';
import { Item } from './ListItem.styles';

interface IListItem {
    children: JSX.Element;
}

const ListItem = ({ children }: IListItem): JSX.Element => {
    return <Item>{children}</Item>;
};

export default ListItem;
