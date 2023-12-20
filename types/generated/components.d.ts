import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBlock1 extends Schema.Component {
  collectionName: 'components_blocks_block_1s';
  info: {
    displayName: 'Block 1';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.block-1': BlocksBlock1;
    }
  }
}
