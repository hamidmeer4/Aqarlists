import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqSections = [
    {
      title: 'Question About Selling',
      questions: [
        {
          id: 1,
          question: 'Can a home depreciate in value?',
          answer: 'Yes, a home can depreciate in value due to various factors such as market conditions, neighborhood decline, or structural issues.'
        },
        {
          id: 2,
          question: 'Is an older home as good a value as a new home?',
          answer: 'Older homes can be a good value if they are well-maintained and located in a desirable area, but it depends on individual preferences and needs.'
        },
        {
          id: 3,
          question: 'What is a broker?',
          answer: 'It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds.The trick is to make it an opportunity for them to define themselves and their interests. Encourage kids to make a pile of ”baby toys” to donate, and have them set aside any toys that no longer interest them, such as action figures from a forgotten TV show. Separating these toys will help them appreciate how much they’ve grown and rediscover the toys they love.'
        },
        {
          id: 4,
          question: 'Can I pay my own taxes and insurance?',
          answer: 'Yes, you can pay your own taxes and insurance, but it may depend on your mortgage agreement.'
        }
      ]
    },
    {
      title: 'Question About Renting',
      questions: [
        {
          id: 5,
          question: 'Can a home depreciate in value?',
          answer: 'Rental properties can also lose value due to market changes or property condition.'
        },
        {
          id: 6,
          question: 'Is an older home as good a value as a new home?',
          answer: 'For renting, older homes may offer lower rents but could have higher maintenance costs.'
        },
        {
          id: 7,
          question: 'What is a broker?',
          answer: 'It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds.The trick is to make it an opportunity for them to define themselves and their interests. Encourage kids to make a pile of ”baby toys” to donate, and have them set aside any toys that no longer interest them, such as action figures from a forgotten TV show. Separating these toys will help them appreciate how much they’ve grown and rediscover the toys they love.'
        },
        {
          id: 8,
          question: 'Can I pay my own taxes and insurance?',
          answer: 'In rental agreements, taxes and insurance are typically the landlord’s responsibility.'
        }
      ]
    }
  ];
}
