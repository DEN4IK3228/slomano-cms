import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectPartsTab extends Struct.ComponentSchema {
  collectionName: 'components_project_parts_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    code: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    frame: Schema.Attribute.String;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video_url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project-parts.tab': ProjectPartsTab;
    }
  }
}
