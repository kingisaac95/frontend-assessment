module.exports = {
  categories: [
    { id: 1,
      title: "Academic Subjects",
      description: 'Like Maths, English, Physics, Chemistry, Futher Maths',
      imageUrl: '',
    },
    { id: 2,
      title: "Other Subjects",
      description: 'Like Music, Dancing, Makeup',
      imageUrl: '',
    }
  ],
  sub_categories: [
    {
      id: 101,
      category_id: 1,
      title: 'Elementary & Kindergarten',
      imageUrl: '',
      subjects: [
        'General Mathematics',
        'Quantitative Reasoning'
      ]
    },
    {
      id: 102,
      category_id: 1,
      title: 'Primary',
      imageUrl: '',
      subjects: [
        'Agric Science',
        'Rock Science'
      ]
    },
    {
      id: 103,
      category_id: 1,
      title: 'Mid School',
      imageUrl: '',
      subjects: [
        'Agric Science II',
        'Rock Science II'
      ]
    },
    {
      id: 104,
      category_id: 2,
      title: 'Music & Theatre arts',
      imageUrl: '',
      subjects: [
        'Singing',
        'Acting',
        'Makeup',
        'Hip Hop Dancing'
      ]
    },
    {
      id: 105,
      category_id: 2,
      title: 'Music & Theatre arts (Intermediate)',
      imageUrl: '',
      subjects: [
        'Singing II',
        'Acting II',
        'Makeup II',
        'Hip Hop Dancing II'
      ]
    },
    {
      id: 103,
      category_id: 2,
      title: 'Music & Theatre arts (Advanced)',
      imageUrl: '',
      subjects: [
        'Singing III',
        'Acting III',
        'Makeup III',
        'Hip Hop Dancing III'
      ]
    },
  ]
};
