// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  
  // We name our schema
  name: 'Project',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Клиенты",
      
      // The identifier for this document type used in the api's
      name: "clients",
      
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      fields: [
        {
          title: "Контактное лицо",
          name: "fullmane",
          type: "string",
        },
        {
          title: 'Ссылка',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'fullmane',
          },
        },
        {
          title: "Телефон",
          name: "Phone",
          type: "string",
        },
        {
          title: "E-mail",
          name: "email",
          type: "email",
        },

        {
          name: 'address',
          title: 'Адрес',
          type: 'object',
          fields: [
            {name: 'street', type: 'string', title: 'Город'}
          ]
        },
         {
          title: 'Аватар',
          name: 'avatar',
          type: 'image'
        },
        {
          title: 'Описание',
          name: 'richText',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
      ]
    },
    {
      // This is the display name for the type
      title: "Проекты",
      
      // The identifier for this document type used in the api's
      name: "projects",
      
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      
      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Название проекта",

          // The identifier for this field used in the api's
          name: "name",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Заказчик",

          // The identifier for this field used in the api's
          name: "clients",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Используемые технологии",

          // The identifier for this field used in the api's
          name: "stack",

          // The type of this field
          type: "string",
        }
      ]
    }
  ])
})