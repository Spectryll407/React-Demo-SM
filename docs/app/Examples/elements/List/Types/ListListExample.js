import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListListExample extends Component {
  render() {
    return (
      <List>
        <Item>Apples</Item>
        <Item>Pears</Item>
        <Item>Oranges</Item>
      </List>
    );
  }
}
