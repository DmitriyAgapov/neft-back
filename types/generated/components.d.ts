import type { Schema, Struct } from '@strapi/strapi';

export interface ContactsEmails extends Struct.ComponentSchema {
  collectionName: 'components_contacts_emails';
  info: {
    displayName: 'Emails';
  };
  attributes: {
    email: Schema.Attribute.Email;
    label: Schema.Attribute.String;
  };
}

export interface ContactsPhones extends Struct.ComponentSchema {
  collectionName: 'components_contacts_phones';
  info: {
    displayName: 'Phones';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.BigInteger;
    phone: Schema.Attribute.String;
  };
}

export interface ContactsSocial extends Struct.ComponentSchema {
  collectionName: 'components_contacts_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    icon_inverse: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface LayoutCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.Component<'layout.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutDocuments extends Struct.ComponentSchema {
  collectionName: 'components_layout_documents';
  info: {
    displayName: 'Documents';
  };
  attributes: {
    attachment: Schema.Attribute.Media<'files'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
  };
  attributes: {};
}

export interface LayoutGallery extends Struct.ComponentSchema {
  collectionName: 'components_layout_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    gallery: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutMeta extends Struct.ComponentSchema {
  collectionName: 'components_layout_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutOption extends Struct.ComponentSchema {
  collectionName: 'components_layout_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutSchema extends Struct.ComponentSchema {
  collectionName: 'components_layout_schemata';
  info: {
    displayName: 'schema';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['before_screen', 'screen', 'catalog', 'useourproducts', 'events']
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_spec_items';
  info: {
    displayName: 'spec_item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
  };
}

export interface LayoutVaiantItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_vaiant_items';
  info: {
    displayName: 'vaiant_item';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface LayoutVariant extends Struct.ComponentSchema {
  collectionName: 'components_layout_variants';
  info: {
    displayName: 'variant';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    item_title: Schema.Attribute.Component<'layout.vaiant-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LogoLogos extends Struct.ComponentSchema {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'Logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_inverse: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contacts.emails': ContactsEmails;
      'contacts.phones': ContactsPhones;
      'contacts.social': ContactsSocial;
      'layout.card': LayoutCard;
      'layout.documents': LayoutDocuments;
      'layout.features': LayoutFeatures;
      'layout.gallery': LayoutGallery;
      'layout.link': LayoutLink;
      'layout.meta': LayoutMeta;
      'layout.option': LayoutOption;
      'layout.schema': LayoutSchema;
      'layout.section': LayoutSection;
      'layout.spec-item': LayoutSpecItem;
      'layout.vaiant-item': LayoutVaiantItem;
      'layout.variant': LayoutVariant;
      'logo.logos': LogoLogos;
    }
  }
}
