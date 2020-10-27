'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interviews', [
      {
        id: "1d353cd0-185f-11eb-adc1-0242ac120002",
        UserId: "c10c9340-1859-11eb-adc1-0242ac120002",
        name: 'Google',
        nervousScore: '5',
        rapportScore: '2',
        technicalScore: '3',
        preparationScore: '5',
        bodylanguageScore: '2',
        questions: JSON.stringify( [
          {"Question" : "Company Name", "Answer": "Google"},
          {"Question" : "Why did I apply for this job?" , "Answer" : "Because the salary was high"},
          {"Question" : "First impression of the company.", "Answer" : "I had the feeling they allready knew a lot about me"},
          {"Question" :  "What was the most difficult questions they asked. (what would have been a better answer)", "Answer"  : "Where do you see yourself in 5 years, A better answer would have been: On the bahamas"},
          {"Question" : "What went well?", "Answer" : "I could answer all their questions"},
          {"Question" : "What were you really happy with?", "Answer" : "The salary" },
          {"Question" : "What did you get across positively about yourself?", "Answer": "That i'm in love with coding" },
          {"Question" : "What questions did you answer really well?", "Answer" : "Why should we hire you?"},
          {"Question" : "What could have gone better?", "Answer" : "I was too nervous" }, 
          {"Question" : "What were you not happy with?", "Answer" : "I could answer all their questions"},
          {"Question" : "What can i do differently next time to improve my performance?", "Answer" : "Be on time"},
          {"Question": "What actionable steps can i take?", "Answer" : "Practice coding"}
        ]),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

           {
        id: "241f4298-185f-11eb-adc1-0242ac120002",
        UserId: "c10c9340-1859-11eb-adc1-0242ac120002",
        name: 'Albert Heijn',
        nervousScore: '4',
        rapportScore: '2',
        technicalScore: '1',
        preparationScore: '3',
        bodylanguageScore: '3',
       questions: JSON.stringify( [
          {"Question" : "Company Name", "Answer": "Google"},
          {"Question" : "Why did I apply for this job?" , "Answer" : "Because the salary was high"},
          {"Question" : "First impression of the company.", "Answer" : "I had the feeling they allready knew a lot about me"},
          {"Question" :  "What was the most difficult questions they asked. (what would have been a better answer)", "Answer"  : "Where do you see yourself in 5 years, A better answer would have been: On the bahamas"},
          {"Question" : "What went well?", "Answer" : "I could answer all their questions"},
          {"Question" : "What were you really happy with?", "Answer" : "The salary" },
          {"Question" : "What did you get across positively about yourself?", "Answer": "That i'm in love with coding" },
          {"Question" : "What questions did you answer really well?", "Answer" : "Why should we hire you?"},
          {"Question" : "What could have gone better?", "Answer" : "I was too nervous" }, 
          {"Question" : "What were you not happy with?", "Answer" : "I could answer all their questions"},
          {"Question" : "What can i do differently next time to improve my performance?", "Answer" : "Be on time"},
          {"Question": "What actionable steps can i take?", "Answer" : "Practice coding"}
        ]),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

        {
        id: "29fad09c-185f-11eb-adc1-0242ac120002",
        UserId: "c10c9340-1859-11eb-adc1-0242ac120002",
        name: 'Phillips',
        nervousScore: '2',
        rapportScore: '4',
        technicalScore: '5',
        preparationScore: '5',
        bodylanguageScore: '1',
       questions: JSON.stringify( [
          {"Question" : "Company Name", "Answer": "Google"},
          {"Question" : "Why did I apply for this job?" , "Answer" : "Because the salary was high"},
          {"Question" : "First impression of the company.", "Answer" : "I had the feeling they allready knew a lot about me"},
          {"Question" :  "What was the most difficult questions they asked. (what would have been a better answer)", "Answer"  : "Where do you see yourself in 5 years, A better answer would have been: On the bahamas"},
          {"Question" : "What went well?", "Answer" : "I could answer all their questions"},
          {"Question" : "What were you really happy with?", "Answer" : "The salary" },
          {"Question" : "What did you get across positively about yourself?", "Answer": "That i'm in love with coding" },
          {"Question" : "What questions did you answer really well?", "Answer" : "Why should we hire you?"},
          {"Question" : "What could have gone better?", "Answer" : "I was too nervous" }, 
          {"Question" : "What were you not happy with?", "Answer" : "I could answer all their questions"},
          {"Question" : "What can i do differently next time to improve my performance?", "Answer" : "Be on time"},
          {"Question": "What actionable steps can i take?", "Answer" : "Practice coding"}
        ]),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
          {
        id: "2dfc5d96-185f-11eb-adc1-0242ac120002",
        UserId: "c10c9340-1859-11eb-adc1-0242ac120002",
        name: 'Ajax',
        nervousScore: '2',
        rapportScore: '1',
        technicalScore: '4',
        preparationScore: '4',
        bodylanguageScore: '4',
     questions: JSON.stringify( [
          {"Question" : "Company Name", "Answer": "Google"},
          {"Question" : "Why did I apply for this job?" , "Answer" : "Because the salary was high"},
          {"Question" : "First impression of the company.", "Answer" : "I had the feeling they allready knew a lot about me"},
          {"Question" :  "What was the most difficult questions they asked. (what would have been a better answer)", "Answer"  : "Where do you see yourself in 5 years, A better answer would have been: On the bahamas"},
          {"Question" : "What went well?", "Answer" : "I could answer all their questions"},
          {"Question" : "What were you really happy with?", "Answer" : "The salary" },
          {"Question" : "What did you get across positively about yourself?", "Answer": "That i'm in love with coding" },
          {"Question" : "What questions did you answer really well?", "Answer" : "Why should we hire you?"},
          {"Question" : "What could have gone better?", "Answer" : "I was too nervous" }, 
          {"Question" : "What were you not happy with?", "Answer" : "I could answer all their questions"},
          {"Question" : "What can i do differently next time to improve my performance?", "Answer" : "Be on time"},
          {"Question": "What actionable steps can i take?", "Answer" : "Practice coding"}
        ]),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "34d0904c-185f-11eb-adc1-0242ac120002",
        UserId: "d0309e70-1859-11eb-adc1-0242ac120002",
        name: 'Facebook',
        nervousScore: '2',
        rapportScore: '3',
        technicalScore: '3',
        preparationScore: '1',
        bodylanguageScore: '5',
 questions: JSON.stringify( [
          {"Question" : "Company Name", "Answer": "Google"},
          {"Question" : "Why did I apply for this job?" , "Answer" : "Because the salary was high"},
          {"Question" : "First impression of the company.", "Answer" : "I had the feeling they allready knew a lot about me"},
          {"Question" :  "What was the most difficult questions they asked. (what would have been a better answer)", "Answer"  : "Where do you see yourself in 5 years, A better answer would have been: On the bahamas"},
          {"Question" : "What went well?", "Answer" : "I could answer all their questions"},
          {"Question" : "What were you really happy with?", "Answer" : "The salary" },
          {"Question" : "What did you get across positively about yourself?", "Answer": "That i'm in love with coding" },
          {"Question" : "What questions did you answer really well?", "Answer" : "Why should we hire you?"},
          {"Question" : "What could have gone better?", "Answer" : "I was too nervous" }, 
          {"Question" : "What were you not happy with?", "Answer" : "I could answer all their questions"},
          {"Question" : "What can i do differently next time to improve my performance?", "Answer" : "Be on time"},
          {"Question": "What actionable steps can i take?", "Answer" : "Practice coding"}
        ]),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
  
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Interviews', null, {});
  },
};
