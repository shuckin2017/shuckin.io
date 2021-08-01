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
            title: "Icon",
            name: "icon",
            type: "iconPicker"
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
          name: 'tags',
          title: 'Tags',
          type: 'tags',
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
        {
          name: 'exampleUsage',
          title: 'Example usage',
          type: 'code',
          options: {
            language: 'js'
          }
        }
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
        {
          title: "Название проекта",
          name: "name",
          type: "string",
        },
        {
          title: "Заказчик",
          name: "clients",
          type: "string",
        },
        {
          title: "Используемые технологии",
          name: "stack",
          type: "string",
        },
        {
          title: "Ссылка на репозиторий",
          name: "urlgithub",
          type: "url",
        },
      ]
    }
  ])
})