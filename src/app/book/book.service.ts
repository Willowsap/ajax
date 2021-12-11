import { Injectable } from '@angular/core';

export interface Page {
  text: Array<string>;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private book: Array<Page> = [
    {
      text: ['Ajax Vashaw', 'March 2011 - December 2021'],
      image: '../../../assets/images/ajax/ajax133.jpg',
    },
    {
      text: ['Ajax was a special cat'],
      image: '',
    },
    {
      text: ['He was friendly'],
      image: '',
    },
    {
      text: ['beautiful'],
      image: '',
    },
    {
      text: ['cuddly'],
      image: '',
    },
    {
      text: ['mischievous'],
      image: '',
    },
    {
      text: ['He loved his family'],
      image: '',
    },
    {
      text: ['And his family loved him'],
      image: '',
    },
    {
      text: ['If you walked int othe house', 'Ajax would greet you'],
      image: '',
    },
    {
      text: ['If you sat on the couch', 'Ajax would sit with you'],
      image: '',
    },
    {
      text: ['...or sit on you'],
      image: '',
    },
    {
      text: ['Ajax would sit with Bart almost every day'],
      image: '',
    },
    {
      text: ['He would beg for pets and attention'],
      image: '',
    },
    {
      text: ['And give the sweetest purrs in return'],
      image: '',
    },
    {
      text: ['Ajax would say hi to Willow every time they visited'],
      image: '',
    },
    {
      text: ['And knead on their lap continuously'],
      image: '',
    },
    {
      text: ['He extended friendship to Yuri when she visited'],
      image: '',
    },
    {
      text: ["He was Yuri's first cat friend"],
      image: '',
    },
    {
      text: [
        'Yuri sometimes stares in the mirror',
        'seeing her friend looking back at her',
      ],
      image: '',
    },
    {
      text: ['Everyone who met Ajax was touched by his sweetness'],
      image: '',
    },
    {
      text: ['He is missed by all'],
      image: '',
    },
    {
      text: [
        'And his memory will live on forever in the hearts of all who met him',
      ],
      image: '',
    },
    {
      text: ['Goodbye, sweet, Ajax', 'We send you our love'],
      image: '',
    },
    {
      text: ['Wherever you are'],
      image: '',
    },
  ];

  getBook() {
    return this.book;
  }
}
