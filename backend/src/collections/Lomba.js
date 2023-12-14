// src/collections/Lomba.js

/** @type {import('payload/types').CollectionConfig} */

const Lomba = {
    slug : "lomba",
    fields : [
      {
        name: "Nama",
        type: "text",
        required: true,
      },
      {
        name: "Email",
        type: "email",
        required: true,
        unique: true,
      },
      {
        name: "Asal_Sekolah",
        label: "Asal Sekolah",
        type: "text",
        required: true,
      },
      {
        name: "Status",
        type: "radio",
        options: 
        [
            {
                label: 'Waiting',
                value: 'waiting',
            },
            {
                label: 'Rejected',
                value: 'rejected',
            },
            {
                label: 'Accepted',
                value: 'accepted',
            },
        ],
        defaultValue: 'waiting',
        admin: {
            layout: 'vertical',
        },
      },
      {
        name: 'dateOnly',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'dayOnly',
            displayFormat: 'd MMM yyy',
          },
        },
      },
    ],
  }
  
  export default Lomba
  
  